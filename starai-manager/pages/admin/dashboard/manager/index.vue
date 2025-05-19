<template>
    <div class="mx-auto">
        <section class="flex justify-between items-center">
            <div>
                <h1 class="text-3xl font-bold mb-2">Quản trị viên</h1>
                <h2 class="font-semibold mb-4">Tổng số lượng: {{ totalManagers }}</h2>
            </div>
            <div class="mb-4 flex items-center space-x-4">
                <NuxtLink
                    to="/admin/dashboard/manager/create"
                    class="bg-blue-600 text-white px-2 py-1 rounded-lg hover:bg-blue-700 transition"
                    title="Tạo quản trị viên"
                >
                    <div class="flex items-center">
                        <Icon name="ph:plus-square" size="2em" />
                    </div>
                </NuxtLink>
            </div>
        </section>

        <div v-if="managers.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div
                v-for="manager in managers"
                :key="manager.id"
                class="border rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer bg-white"
            >
                <NuxtLink
                    :to="`/admin/dashboard/manager/${manager.id}`"
                    class="text-lg font-semibold text-blue-600 hover:underline"
                >
                    {{ manager.email }}
                </NuxtLink>
            </div>
        </div>

        <div v-else>
            <p class="text-center text-gray-500">Không có quản trị viên nào.</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useAuthFetch } from '~/composables/useAuthFetch';

interface Manager {
    id: string;
    email: string;
}

const managers = ref<Manager[]>([]);
const totalManagers = ref(0);

const fetchManagers = async () => {
    try {
        const url = '/api/v1/private/admin/manager';
        const response = await useAuthFetch(url, { method: 'GET' }, 'user');
        console.log('response', response);
        const res = response as Manager[];
        totalManagers.value = res.length;

        managers.value = res || [];
    } catch (error) {
        console.error('Error fetching managers:', error);
    }
};
onMounted(() => {
    fetchManagers();
});
</script>
