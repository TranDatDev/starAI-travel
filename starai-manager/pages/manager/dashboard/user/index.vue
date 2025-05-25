<template>
    <div class="mx-auto">
        <section class="flex justify-between items-center">
            <div>
                <h1 class="text-3xl font-bold mb-2">Người dùng</h1>
                <h2 class="font-semibold mb-4">Tổng số lượng: {{ totalUsers }}</h2>
            </div>
            <div class="mb-4 flex items-center space-x-4">
                <NuxtLink
                    to="/admin/dashboard/user/create"
                    class="bg-blue-600 text-white px-2 py-1 rounded-lg hover:bg-blue-700 transition"
                    title="Tạo người dùng"
                >
                    <div class="flex items-center">
                        <Icon name="ph:plus-square" size="2em" />
                    </div>
                </NuxtLink>
            </div>
        </section>

        <div v-if="users.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div
                v-for="user in users"
                :key="user.id"
                class="border rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer bg-white"
            >
                <NuxtLink
                    :to="`/admin/dashboard/user/${user.id}`"
                    class="text-lg font-semibold text-blue-600 hover:underline"
                >
                    {{ user.email }}
                </NuxtLink>
            </div>
        </div>

        <div v-else>
            <p class="text-center text-gray-500">Không có người dùng nào.</p>
        </div>

        <Pagination
            v-if="totalPages > 1"
            :totalPages="totalPages"
            :currentPage="page"
            @update:page="onPageChange"
        />
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuthFetch } from '~/composables/useAuthFetch';

interface User {
    id: string;
    email: string;
}

const users = ref<User[]>([]);
const totalUsers = ref(0);
const totalPages = ref(1);
const limit = 10;

const route = useRoute();
const router = useRouter();
const page = ref(parseInt(route.query.page as string) || 1);

const fetchUsers = async () => {
    try {
        const query = new URLSearchParams();
        query.set('page', String(page.value));
        query.set('limit', String(limit));

        const url = `/api/v1/private/manager/user?${query.toString()}`;
        const response = await useAuthFetch(url, { method: 'GET' }, 'user');
        console.log('Response:', response);
        const res = response as { total: number; data: User[] };
        console.log('Fetched users:', res);

        users.value = res.data || [];
        totalUsers.value = res.total || 0;
        totalPages.value = Math.ceil(res.total / limit);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
};

const onPageChange = (newPage: number) => {
    page.value = newPage;
    updateQuery();
};

const updateQuery = () => {
    router.replace({
        query: {
            ...route.query,
            page: String(page.value),
        },
    });
};

watch(
    () => route.query,
    () => {
        page.value = parseInt(route.query.page as string) || 1;
        fetchUsers();
    }
);

onMounted(() => {
    fetchUsers();
});
</script>
