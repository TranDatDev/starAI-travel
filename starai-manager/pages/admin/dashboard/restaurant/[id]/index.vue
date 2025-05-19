<template>
    <div v-if="restaurant" class="space-y-6">
        <div class="flex items-center justify-between pb-4">
            <h1 class="text-3xl font-bold text-gray-800">{{ restaurant.name }}</h1>
            <div class="flex gap-2">
                <button
                    :disabled="restaurant.isDeleted"
                    @click="handleSoftDelete"
                    :class="[
                        'px-4 py-1 text-sm font-medium rounded',
                        restaurant.isDeleted
                            ? 'bg-gray-400 cursor-not-allowed text-white'
                            : 'bg-yellow-500 hover:bg-yellow-600 text-white',
                    ]"
                >
                    {{ restaurant.isDeleted ? 'Đã xoá tạm thời' : 'Xoá tạm thời' }}
                </button>
                <button
                    class="px-4 py-1 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded"
                    @click="handleHardDelete"
                >
                    Xoá vĩnh viễn
                </button>
                <NuxtLink
                    :to="`/admin/dashboard/restaurant/${restaurant._id}/update`"
                    class="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded inline-block"
                >
                    Cập nhật
                </NuxtLink>
            </div>
        </div>
        <dl class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
            <div>
                <dt class="font-semibold">Danh mục:</dt>
                <dd>{{ restaurant.category }}</dd>
            </div>

            <div>
                <dt class="font-semibold">Địa điểm cụ thể:</dt>
                <dd>{{ restaurant.fullAddress }}</dd>
            </div>

            <div>
                <dt class="font-semibold">Email liên hệ:</dt>
                <dd>
                    <a :href="'mailto:' + restaurant.contactEmail" class="text-blue-600 underline">
                        {{ restaurant.contactEmail }}
                    </a>
                </dd>
            </div>

            <div>
                <dt class="font-semibold">Số điện thoại liên hệ:</dt>
                <dd>{{ restaurant.contactPhone }}</dd>
            </div>

            <div>
                <dt class="font-semibold">Website:</dt>
                <dd>
                    <a :href="restaurant.website" target="_blank" class="text-blue-600 underline">
                        {{ restaurant.website }}
                    </a>
                </dd>
            </div>

            <div>
                <dt class="font-semibold">Khoảng giá:</dt>
                <dd>
                    {{ restaurant.minPrice.toLocaleString() }} -
                    {{ restaurant.maxPrice.toLocaleString() }} VND
                </dd>
            </div>

            <div>
                <dt class="font-semibold">Đánh giá người dùng:</dt>
                <dd>{{ restaurant.userRating }} / 5 ({{ restaurant.reviewsCount }} đánh giá)</dd>
            </div>
        </dl>

        <div>
            <h2 class="text-lg font-semibold text-gray-800 mb-2">Mô tả</h2>
            <div class="grid gap-2 text-sm text-gray-700">
                <div class="border p-2 rounded" v-if="restaurant.description.vi">
                    <strong>Tiếng Việt:</strong> {{ restaurant.description.vi }}
                </div>
                <div class="border p-2 rounded" v-if="restaurant.description.en">
                    <strong>Tiếng Anh:</strong> {{ restaurant.description.en }}
                </div>
                <div class="border p-2 rounded" v-if="restaurant.description.ko">
                    <strong>Tiếng Hàn:</strong> {{ restaurant.description.ko }}
                </div>
                <div class="border p-2 rounded" v-if="restaurant.description.ja">
                    <strong>Tiếng Nhật:</strong> {{ restaurant.description.ja }}
                </div>
                <div class="border p-2 rounded" v-if="restaurant.description.zh">
                    <strong>Tiếng Trung:</strong> {{ restaurant.description.zh }}
                </div>
            </div>
        </div>

        <div v-if="restaurant.amenities?.length">
            <h2 class="text-lg font-semibold text-gray-800 mb-2">Tiện ích</h2>
            <ul class="list-disc list-inside text-gray-700">
                <li v-for="(amenity, index) in restaurant.amenities" :key="index">{{ amenity }}</li>
            </ul>
        </div>

        <div v-if="restaurant.openingHours?.length">
            <h2 class="text-lg font-semibold text-gray-800 mb-2">Giờ mở cửa</h2>
            <ul class="list-disc list-inside text-gray-700">
                <li v-for="(time, index) in restaurant.openingHours" :key="index">{{ time }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useAuthFetch } from '~/composables/useAuthFetch';

interface Restaurant {
    _id: string;
    name: string;
    category: string;
    description: { vi: string; en?: string; ko?: string; ja?: string; zh?: string };
    fullAddress: string;
    address: string;
    contactEmail: string;
    contactPhone: string;
    amenities: string[];
    openingHours: string[];
    website: string;
    reviewsCount: number;
    reviewsTotal: number;
    minPrice: number;
    maxPrice: number;
    maxGuests: number;
    maxRooms: number;
    userRating: number;
    isDeleted: boolean;
}

const route = useRoute();
const restaurant = ref<Restaurant | null>(null);

const fetchRestaurantById = async () => {
    try {
        const url = `api/v1/private/restaurant/${route.params.id}`;
        const response = await useAuthFetch(url, { method: 'GET' }, 'place');
        console.log('Response:', response);
        restaurant.value = response as Restaurant;
        console.log('Restaurant:', restaurant.value);
    } catch (error) {
        console.error('Error fetching restaurant:', error);
    }
};

onMounted(() => {
    fetchRestaurantById();
});

const handleSoftDelete = async () => {
    const confirmed = confirm('Xoá tạm thời nhà hàng này?');
    if (!confirmed) return;

    try {
        await useAuthFetch(
            `/api/v1/private/restaurant/${restaurant.value?._id}?type=soft`,
            {
                method: 'DELETE',
            },
            'place'
        );
        alert('Đã xoá tạm thời');
        location.reload();
    } catch (error) {
        console.error('Lỗi xoá tạm thời:', error);
    }
};

const handleHardDelete = async () => {
    const confirmed = confirm('Xoá VĨNH VIỄN nhà hàng này?');
    if (!confirmed) return;

    try {
        await useAuthFetch(
            `/api/v1/private/restaurant/${restaurant.value?._id}?type=hard`,
            {
                method: 'DELETE',
            },
            'place'
        );
        alert('Đã xoá vĩnh viễn');
        await navigateTo('/admin/dashboard/restaurant');
    } catch (error) {
        console.error('Lỗi xoá vĩnh viễn:', error);
    }
};
</script>
