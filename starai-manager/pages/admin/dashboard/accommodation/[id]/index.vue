<template>
    <div v-if="accommodation" class="space-y-6">
        <div class="flex items-center justify-between pb-4">
            <h1 class="text-3xl font-bold text-gray-800">{{ accommodation.name }}</h1>
            <div class="flex gap-2">
                <button
                    :disabled="accommodation.isDeleted"
                    @click="handleSoftDelete"
                    :class="[
                        'px-4 py-1 text-sm font-medium rounded',
                        accommodation.isDeleted
                            ? 'bg-gray-400 cursor-not-allowed text-white'
                            : 'bg-yellow-500 hover:bg-yellow-600 text-white',
                    ]"
                >
                    {{ accommodation.isDeleted ? 'Đã xoá tạm thời' : 'Xoá tạm thời' }}
                </button>
                <button
                    class="px-4 py-1 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded"
                    @click="handleHardDelete"
                >
                    Xoá vĩnh viễn
                </button>
                <NuxtLink
                    :to="`/admin/dashboard/accommodation/${accommodation._id}/update`"
                    class="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded inline-block"
                >
                    Cập nhật
                </NuxtLink>
            </div>
        </div>
        <dl class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
            <div>
                <dt class="font-semibold">Danh mục:</dt>
                <dd>{{ accommodation.category }}</dd>
            </div>

            <div>
                <dt class="font-semibold">Địa điểm cụ thể:</dt>
                <dd>{{ accommodation.fullAddress }}</dd>
            </div>

            <div>
                <dt class="font-semibold">Email liên hệ:</dt>
                <dd>
                    <a
                        :href="'mailto:' + accommodation.contactEmail"
                        class="text-blue-600 underline"
                    >
                        {{ accommodation.contactEmail }}
                    </a>
                </dd>
            </div>

            <div>
                <dt class="font-semibold">Số điện thoại liên hệ:</dt>
                <dd>{{ accommodation.contactPhone }}</dd>
            </div>

            <div>
                <dt class="font-semibold">Website:</dt>
                <dd>
                    <a
                        :href="accommodation.website"
                        target="_blank"
                        class="text-blue-600 underline"
                    >
                        {{ accommodation.website }}
                    </a>
                </dd>
            </div>

            <div>
                <dt class="font-semibold">Khoảng giá:</dt>
                <dd>
                    {{ accommodation.minPrice.toLocaleString() }} -
                    {{ accommodation.maxPrice.toLocaleString() }} VND
                </dd>
            </div>

            <div>
                <dt class="font-semibold">Đánh giá người dùng:</dt>
                <dd>
                    {{ accommodation.userRating }} / 5 ({{ accommodation.reviewsCount }} đánh giá)
                </dd>
            </div>
        </dl>

        <div>
            <h2 class="text-lg font-semibold text-gray-800 mb-2">Mô tả</h2>
            <div class="grid gap-2 text-sm text-gray-700">
                <div class="border p-2 rounded" v-if="accommodation.description.vi">
                    <strong>Tiếng Việt:</strong> {{ accommodation.description.vi }}
                </div>
                <div class="border p-2 rounded" v-if="accommodation.description.en">
                    <strong>Tiếng Anh:</strong> {{ accommodation.description.en }}
                </div>
                <div class="border p-2 rounded" v-if="accommodation.description.ko">
                    <strong>Tiếng Hàn:</strong> {{ accommodation.description.ko }}
                </div>
                <div class="border p-2 rounded" v-if="accommodation.description.ja">
                    <strong>Tiếng Nhật:</strong> {{ accommodation.description.ja }}
                </div>
                <div class="border p-2 rounded" v-if="accommodation.description.zh">
                    <strong>Tiếng Trung:</strong> {{ accommodation.description.zh }}
                </div>
            </div>
        </div>

        <div v-if="accommodation.amenities?.length">
            <h2 class="text-lg font-semibold text-gray-800 mb-2">Tiện ích</h2>
            <ul class="list-disc list-inside text-gray-700">
                <li v-for="(amenity, index) in accommodation.amenities" :key="index">
                    {{ amenity }}
                </li>
            </ul>
        </div>

        <div v-if="accommodation.openingHours?.length">
            <h2 class="text-lg font-semibold text-gray-800 mb-2">Giờ mở cửa</h2>
            <ul class="list-disc list-inside text-gray-700">
                <li v-for="(time, index) in accommodation.openingHours" :key="index">{{ time }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useAuthFetch } from '~/composables/useAuthFetch';

interface Accommodation {
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
const accommodation = ref<Accommodation | null>(null);

const fetchAccommodationById = async () => {
    try {
        const url = `api/v1/private/accommodation/${route.params.id}`;
        const response = await useAuthFetch(url, { method: 'GET' }, 'place');
        console.log('Response:', response);
        accommodation.value = response as Accommodation;
        console.log('Accommodation:', accommodation.value);
    } catch (error) {
        console.error('Error fetching accommodation:', error);
    }
};

onMounted(() => {
    fetchAccommodationById();
});

const handleSoftDelete = async () => {
    const confirmed = confirm('Xoá tạm thời cơ sở lưu trú này?');
    if (!confirmed) return;

    try {
        await useAuthFetch(
            `/api/v1/private/accommodation/${accommodation.value?._id}?type=soft`,
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
    const confirmed = confirm('Xoá VĨNH VIỄN cơ sở lưu trú này?');
    if (!confirmed) return;

    try {
        await useAuthFetch(
            `/api/v1/private/accommodation/${accommodation.value?._id}?type=hard`,
            {
                method: 'DELETE',
            },
            'place'
        );
        alert('Đã xoá vĩnh viễn');
        await navigateTo('/admin/dashboard/accommodation');
    } catch (error) {
        console.error('Lỗi xoá vĩnh viễn:', error);
    }
};
</script>
