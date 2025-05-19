<template>
    <div v-if="attraction" class="space-y-6">
        <div class="flex items-center justify-between pb-4">
            <h1 class="text-3xl font-bold text-gray-800">{{ attraction.name }}</h1>
            <div class="flex gap-2">
                <button
                    :disabled="attraction.isDeleted"
                    @click="handleSoftDelete"
                    :class="[
                        'px-4 py-1 text-sm font-medium rounded',
                        attraction.isDeleted
                            ? 'bg-gray-400 cursor-not-allowed text-white'
                            : 'bg-yellow-500 hover:bg-yellow-600 text-white',
                    ]"
                >
                    {{ attraction.isDeleted ? 'Đã xoá tạm thời' : 'Xoá tạm thời' }}
                </button>
                <button
                    class="px-4 py-1 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded"
                    @click="handleHardDelete"
                >
                    Xoá vĩnh viễn
                </button>
                <NuxtLink
                    :to="`/admin/dashboard/attraction/${attraction._id}/update`"
                    class="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded inline-block"
                >
                    Cập nhật
                </NuxtLink>
            </div>
        </div>
        <dl class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
            <div>
                <dt class="font-semibold">Danh mục:</dt>
                <dd>{{ attraction.category }}</dd>
            </div>

            <div>
                <dt class="font-semibold">Địa điểm cụ thể:</dt>
                <dd>{{ attraction.fullAddress }}</dd>
            </div>

            <div>
                <dt class="font-semibold">Email liên hệ:</dt>
                <dd>
                    <a :href="'mailto:' + attraction.contactEmail" class="text-blue-600 underline">
                        {{ attraction.contactEmail }}
                    </a>
                </dd>
            </div>

            <div>
                <dt class="font-semibold">Số điện thoại liên hệ:</dt>
                <dd>{{ attraction.contactPhone }}</dd>
            </div>

            <div>
                <dt class="font-semibold">Website:</dt>
                <dd>
                    <a :href="attraction.website" target="_blank" class="text-blue-600 underline">
                        {{ attraction.website }}
                    </a>
                </dd>
            </div>

            <div>
                <dt class="font-semibold">Khoảng giá:</dt>
                <dd>
                    {{ attraction.minPrice.toLocaleString() }} -
                    {{ attraction.maxPrice.toLocaleString() }} VND
                </dd>
            </div>

            <div>
                <dt class="font-semibold">Đánh giá người dùng:</dt>
                <dd>{{ attraction.userRating }} / 5 ({{ attraction.reviewsCount }} đánh giá)</dd>
            </div>
        </dl>

        <div>
            <h2 class="text-lg font-semibold text-gray-800 mb-2">Mô tả</h2>
            <div class="grid gap-2 text-sm text-gray-700">
                <div class="border p-2 rounded" v-if="attraction.description.vi">
                    <strong>Tiếng Việt:</strong> {{ attraction.description.vi }}
                </div>
                <div class="border p-2 rounded" v-if="attraction.description.en">
                    <strong>Tiếng Anh:</strong> {{ attraction.description.en }}
                </div>
                <div class="border p-2 rounded" v-if="attraction.description.ko">
                    <strong>Tiếng Hàn:</strong> {{ attraction.description.ko }}
                </div>
                <div class="border p-2 rounded" v-if="attraction.description.ja">
                    <strong>Tiếng Nhật:</strong> {{ attraction.description.ja }}
                </div>
                <div class="border p-2 rounded" v-if="attraction.description.zh">
                    <strong>Tiếng Trung:</strong> {{ attraction.description.zh }}
                </div>
            </div>
        </div>

        <div v-if="attraction.amenities?.length">
            <h2 class="text-lg font-semibold text-gray-800 mb-2">Tiện ích</h2>
            <ul class="list-disc list-inside text-gray-700">
                <li v-for="(amenity, index) in attraction.amenities" :key="index">{{ amenity }}</li>
            </ul>
        </div>

        <div v-if="attraction.openingHours?.length">
            <h2 class="text-lg font-semibold text-gray-800 mb-2">Giờ mở cửa</h2>
            <ul class="list-disc list-inside text-gray-700">
                <li v-for="(time, index) in attraction.openingHours" :key="index">{{ time }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useAuthFetch } from '~/composables/useAuthFetch';

interface Attraction {
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
    userRating: number;
    isDeleted: boolean;
}

const route = useRoute();
const attraction = ref<Attraction | null>(null);

const fetchAttractionById = async () => {
    try {
        const url = `api/v1/private/attraction/${route.params.id}`;
        const response = await useAuthFetch(url, { method: 'GET' }, 'place');
        console.log('Response:', response);
        attraction.value = response as Attraction;
        console.log('Attraction:', attraction.value);
    } catch (error) {
        console.error('Error fetching attraction:', error);
    }
};

onMounted(() => {
    fetchAttractionById();
});

const handleSoftDelete = async () => {
    const confirmed = confirm('Xoá tạm thời địa điểm du lịch này?');
    if (!confirmed) return;

    try {
        await useAuthFetch(
            `/api/v1/private/attraction/${attraction.value?._id}?type=soft`,
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
    const confirmed = confirm('Xoá VĨNH VIỄN địa điểm du lịch này?');
    if (!confirmed) return;

    try {
        await useAuthFetch(
            `/api/v1/private/attraction/${attraction.value?._id}?type=hard`,
            {
                method: 'DELETE',
            },
            'place'
        );
        alert('Đã xoá vĩnh viễn');
        await navigateTo('/admin/dashboard/attraction');
    } catch (error) {
        console.error('Lỗi xoá vĩnh viễn:', error);
    }
};
</script>
