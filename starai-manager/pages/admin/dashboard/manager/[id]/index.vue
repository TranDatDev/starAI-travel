<template>
    <div v-if="manager" class="space-y-6">
        <div class="flex items-center justify-between pb-4">
            <h1 class="text-3xl font-bold text-gray-800">{{ manager.email }}</h1>
            <div class="flex gap-2">
                <button
                    :disabled="manager.isDeleted"
                    @click="handleSoftDelete"
                    :class="[
                        'px-4 py-1 text-sm font-medium rounded',
                        manager.isDeleted
                            ? 'bg-gray-400 cursor-not-allowed text-white'
                            : 'bg-yellow-500 hover:bg-yellow-600 text-white',
                    ]"
                >
                    {{ manager.isDeleted ? 'Đã xoá tạm thời' : 'Xoá tạm thời' }}
                </button>
                <button
                    class="px-4 py-1 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded"
                    @click="handleHardDelete"
                >
                    Xoá vĩnh viễn
                </button>
                <NuxtLink
                    :to="`/admin/dashboard/manager/${manager.id}/update`"
                    class="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded inline-block"
                >
                    Cập nhật
                </NuxtLink>
            </div>
        </div>
        <dl class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
            <div>
                <dt class="font-semibold">Thời gian tạo:</dt>
                <dd>{{ manager.createdAt }}</dd>
            </div>

            <div>
                <dt class="font-semibold">Lần cuối cập nhật:</dt>
                <dd>{{ manager.updatedAt }}</dd>
            </div>
        </dl>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useAuthFetch } from '~/composables/useAuthFetch';

interface Manager {
    id: string;
    name: string;
    email: string;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const route = useRoute();
const manager = ref<Manager | null>(null);

const fetchManagerById = async () => {
    try {
        const url = `/api/v1/private/admin/manager/${route.params.id}`;
        const response = await useAuthFetch(url, { method: 'GET' }, 'user');
        console.log('Response:', response);
        manager.value = response as Manager;
        console.log('Manager:', manager.value);
    } catch (error) {
        console.error('Error fetching manager:', error);
    }
};

onMounted(() => {
    fetchManagerById();
});

const handleSoftDelete = async () => {
    const confirmed = confirm('Xoá tạm thời quản trị viên này?');
    if (!confirmed) return;

    try {
        await useAuthFetch(
            `/api/v1/private/manager/${manager.value?.id}?type=soft`,
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
    const confirmed = confirm('Xoá VĨNH VIỄN quản trị viên này?');
    if (!confirmed) return;

    try {
        await useAuthFetch(
            `/api/v1/private/manager/${manager.value?.id}?type=hard`,
            {
                method: 'DELETE',
            },
            'place'
        );
        alert('Đã xoá vĩnh viễn');
        await navigateTo('/admin/dashboard/manager');
    } catch (error) {
        console.error('Lỗi xoá vĩnh viễn:', error);
    }
};
</script>
