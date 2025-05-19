<template>
    <div class="mx-auto">
        <h1 class="text-3xl font-bold mb-2">Tạo nhà hàng</h1>
        <form @submit.prevent="handleSubmit" class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="col-span-2">
                <InputLabel required>Tên</InputLabel>
                <input v-model="form.name" type="text" class="input" required />
            </div>
            <div>
                <InputLabel required>Mô tả (Tiếng Việt)</InputLabel>
                <textarea v-model="form.description.vi" class="input" rows="1" required></textarea>
            </div>
            <div>
                <InputLabel required>Mô tả (EN)</InputLabel>
                <textarea v-model="form.description.en" class="input" rows="1" required></textarea>
            </div>

            <div class="col-span-2">
                <InputLabel required>Địa chỉ</InputLabel>
                <input v-model="form.address" type="text" class="input" required />
            </div>
            <div>
                <InputLabel required>Tỉnh / Thành phố</InputLabel>
                <select
                    v-model="selectedProvince"
                    class="input"
                    required
                    @change="onProvinceChange"
                >
                    <option disabled value="">-- Chọn tỉnh --</option>
                    <option v-for="p in provinces" :key="p.shortId" :value="p.shortId">
                        {{ p.fullName }}
                    </option>
                </select>
            </div>

            <!-- Chọn Quận / Huyện -->
            <div>
                <InputLabel required>Quận / Huyện</InputLabel>
                <select
                    v-model="selectedDistrict"
                    class="input"
                    required
                    @change="onDistrictChange"
                    :disabled="!selectedProvince"
                >
                    <option disabled value="">-- Chọn quận/huyện --</option>
                    <option v-for="d in districts" :key="d.shortId" :value="d.shortId">
                        {{ d.fullName }}
                    </option>
                </select>
            </div>

            <!-- Chọn Phường / Xã -->
            <div>
                <InputLabel required>Phường / Xã</InputLabel>
                <select
                    v-model="selectedCommune"
                    class="input"
                    required
                    :disabled="!selectedDistrict"
                >
                    <option disabled value="">-- Chọn phường/xã --</option>
                    <option v-for="c in communes" :key="c.shortId" :value="c.shortId">
                        {{ c.fullName }}
                    </option>
                </select>
            </div>

            <div class="col-span-2">
                <InputLabel required>Thẻ (tags)</InputLabel>
                <input
                    v-model="tagsInput"
                    @keydown.enter.prevent="addTag"
                    type="text"
                    class="input"
                    placeholder="Nhập tag và Enter"
                />
                <div class="flex flex-wrap gap-2 mt-2">
                    <span
                        v-for="(tag, index) in form.tags"
                        :key="index"
                        class="bg-gray-200 px-2 py-1 rounded"
                    >
                        {{ tag }} <button @click="removeTag(index)" type="button">&times;</button>
                    </span>
                </div>
            </div>

            <div>
                <InputLabel required>Hạng sao</InputLabel>
                <input
                    v-model.number="form.officialRating"
                    type="number"
                    min="1"
                    max="5"
                    class="input"
                    required
                />
            </div>
            <div>
                <InputLabel required>Điện thoại liên hệ</InputLabel>
                <input v-model="form.contactPhone" type="text" class="input" required />
            </div>
            <div>
                <InputLabel required>Email liên hệ</InputLabel>
                <input v-model="form.contactEmail" type="email" class="input" required />
            </div>

            <div>
                <InputLabel required>Website</InputLabel>
                <input v-model="form.website" type="url" class="input" required />
            </div>

            <div>
                <InputLabel required>Giá thấp nhất</InputLabel>
                <input v-model.number="form.minPrice" type="number" class="input" required />
            </div>
            <div>
                <InputLabel required>Giá cao nhất</InputLabel>
                <input v-model.number="form.maxPrice" type="number" class="input" required />
            </div>
            <div>
                <InputLabel required>Giờ mở cửa</InputLabel>
                <input
                    v-model="openingInput"
                    @keydown.enter.prevent="addOpeningHour"
                    type="text"
                    class="input"
                    placeholder="VD: 08:00-12:00"
                />
                <ul class="list-disc ml-6 mt-1">
                    <li v-for="(hour, index) in form.openingHours" :key="index">
                        {{ hour }}
                        <button @click="removeOpeningHour(index)" type="button">&times;</button>
                    </li>
                </ul>
            </div>

            <div class="col-span-2">
                <InputLabel required>Tiện nghi</InputLabel>
                <input
                    v-model="amenitiesInput"
                    @keydown.enter.prevent="addAmenity"
                    type="text"
                    class="input"
                    placeholder="Nhập tiện nghi và Enter"
                />
                <div class="flex flex-wrap gap-2 mt-2">
                    <span
                        v-for="(item, index) in form.amenities"
                        :key="index"
                        class="bg-gray-200 px-2 py-1 rounded"
                    >
                        {{ item }}
                        <button @click="removeAmenity(index)" type="button">&times;</button>
                    </span>
                </div>
            </div>
            <div>
                <InputLabel required>Số khách tối đa</InputLabel>
                <input v-model.number="form.maxGuests" type="number" class="input" required />
            </div>
            <div>
                <InputLabel required>Số phòng tối đa</InputLabel>
                <input v-model.number="form.maxRooms" type="number" class="input" required />
            </div>

            <div>
                <InputLabel required>Chính sách huỷ</InputLabel>
                <input v-model="form.policies.cancellation" type="text" class="input" required />
            </div>
            <div>
                <InputLabel required>Check-in</InputLabel>
                <input v-model="form.policies.checkIn" type="time" class="input" required />
            </div>
            <div>
                <InputLabel required>Check-out</InputLabel>
                <input v-model="form.policies.checkOut" type="time" class="input" required />
            </div>

            <div>
                <InputLabel required>Tọa độ (Kinh độ)</InputLabel>
                <input
                    v-model.number="form.coordinates.coordinates[0]"
                    type="number"
                    class="input"
                    step="any"
                    required
                />
            </div>
            <div>
                <InputLabel required>Tọa độ (Vĩ độ)</InputLabel>
                <input
                    v-model.number="form.coordinates.coordinates[1]"
                    type="number"
                    class="input"
                    step="any"
                    required
                />
            </div>

            <div>
                <InputLabel required>Phân loại</InputLabel>
                <select v-model="form.category" class="input" required>
                    <option value="hotel">Hotel</option>
                    <option value="resort">Resort</option>
                    <option value="homestay">Homestay</option>
                </select>
            </div>

            <div class="flex items-center gap-2">
                <InputLabel required>Hiển thị nổi bật</InputLabel>
                <input v-model="form.isFeatured" type="checkbox" required />
            </div>
            <div class="flex items-center gap-2">
                <InputLabel required>Còn hoạt động</InputLabel>
                <input v-model="form.isAvailable" type="checkbox" required />
            </div>
            <div class="col-span-2 mt-4">
                <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">Lưu</button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthFetch } from '~/composables/useAuthFetch';
const adminId = useCookie('adminId').value;
const form = ref({
    name: '',
    description: { vi: '', en: '' },
    address: '',
    tags: [] as string[],
    officialRating: 1,
    reviewsTotal: 0,
    reviewsCount: 0,
    contactPhone: '',
    contactEmail: '',
    isAvailable: true,
    isFeatured: true,
    openingHours: [] as string[],
    website: '',
    amenities: [] as string[],
    minPrice: 0,
    maxPrice: 0,
    maxGuests: 1,
    maxRooms: 1,
    policies: { cancellation: '', checkIn: '', checkOut: '' },
    coordinates: { type: 'Point', coordinates: [0, 0] },
    category: 'hotel',
    adminId: adminId,
    communeId: '',
});

const tagsInput = ref('');
const openingInput = ref('');
const amenitiesInput = ref('');

const addTag = () => {
    if (tagsInput.value.trim()) {
        form.value.tags.push(tagsInput.value.trim());
        tagsInput.value = '';
    }
};

const removeTag = (index: number) => {
    form.value.tags.splice(index, 1);
};

const addOpeningHour = () => {
    if (openingInput.value.trim()) {
        form.value.openingHours.push(openingInput.value.trim());
        openingInput.value = '';
    }
};

const removeOpeningHour = (index: number) => {
    form.value.openingHours.splice(index, 1);
};

const addAmenity = () => {
    if (amenitiesInput.value.trim()) {
        form.value.amenities.push(amenitiesInput.value.trim());
        amenitiesInput.value = '';
    }
};

const removeAmenity = (index: number) => {
    form.value.amenities.splice(index, 1);
};

interface Province {
    shortId: string;
    fullName: string;
}

interface District {
    shortId: string;
    fullName: string;
}

interface Commune {
    shortId: string;
    fullName: string;
}

// State chọn các địa phương
const selectedProvince = ref<string>('');
const selectedDistrict = ref<string>('');
const selectedCommune = ref<string>('');

// Mảng dữ liệu
const provinces = ref<Province[]>([]);
const districts = ref<District[]>([]);
const communes = ref<Commune[]>([]);

// Hàm gọi API lấy danh sách districts theo provinceId
const onProvinceChange = async () => {
    selectedDistrict.value = ''; // reset huyện
    selectedCommune.value = ''; // reset xã
    communes.value = []; // reset danh sách xã
    console.log('Selected province:', selectedProvince.value);
    if (selectedProvince.value) {
        const response = await useAuthFetch(
            `/api/v1/private/location/districts?provinceId=${selectedProvince.value}`,
            { method: 'GET' },
            'place'
        );
        console.log('Districts:', response);
        districts.value = (response as District[]) || [];
    } else {
        districts.value = [];
    }
};

// Hàm gọi API lấy danh sách communes theo districtId
const onDistrictChange = async () => {
    selectedCommune.value = ''; // reset xã

    if (selectedDistrict.value) {
        const response = await useAuthFetch(
            `/api/v1/private/location/communes?districtId=${selectedDistrict.value}`,
            { method: 'GET' },
            'place'
        );
        communes.value = (response as Commune[]) || [];
    } else {
        communes.value = [];
    }
};

watch(selectedCommune, (newVal) => {
    form.value.communeId = newVal;
    console.log('Selected commune:', newVal);
});

onMounted(async () => {
    const response = await useAuthFetch(
        '/api/v1/private/location/provinces',
        { method: 'GET' },
        'place'
    );
    console.log('Provinces:', response);

    // Ép kiểu response thành Province[]
    provinces.value = (response as Province[]) || [];
});

const handleSubmit = async () => {
    console.log('Submitting form:', form.value);
    try {
        const response = await useAuthFetch(
            '/api/v1/private/restaurant',
            {
                method: 'POST',
                body: form.value,
            },
            'place'
        );
        if (!response) {
            alert('Có lỗi xảy ra khi tạo nhà hàng.');
        }
        console.log('Restaurant created:', response);
        alert('Nhà hàng đã được tạo thành công!');
        navigateTo('/admin/dashboard/restaurant');
    } catch (error) {
        console.error('Error creating restaurant:', error);
    }
};
</script>
