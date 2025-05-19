<template>
    <div class="mx-auto">
        <section class="flex justify-between items-center">
            <div>
                <h1 class="text-3xl font-bold mb-2">Cơ sở lưu trú</h1>
                <h2 class="font-semibold mb-4">Tổng số lượng: {{ totalAccommodations }}</h2>
            </div>
            <div class="mb-4 flex items-center space-x-4">
                <NuxtLink
                    to="/admin/dashboard/accommodation/create"
                    class="bg-blue-600 text-white px-2 py-1 rounded-lg hover:bg-blue-700 transition"
                    title="Tạo cơ sở lưu trú"
                >
                    <div class="flex items-center">
                        <Icon name="ph:plus-square" size="2em" />
                    </div>
                </NuxtLink>
                <input
                    v-model="rawSearch"
                    @input="onSearchInput"
                    type="text"
                    placeholder="Tìm kiếm cơ sở lưu trú..."
                    class="border rounded-lg px-4 py-2 w-full"
                />
            </div>
        </section>

        <div v-if="accommodations.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div
                v-for="accommodation in accommodations"
                :key="accommodation._id"
                class="border rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer bg-white"
            >
                <NuxtLink
                    :to="`/admin/dashboard/accommodation/${accommodation._id}`"
                    class="text-lg font-semibold text-blue-600 hover:underline"
                >
                    {{ accommodation.name }}
                </NuxtLink>
                <p class="mt-2 text-gray-600 truncate">
                    {{ accommodation.description?.vi || 'Không có mô tả' }}
                </p>
                <p class="mt-2 text-sm text-gray-500">
                    {{ accommodation.fullAddress || 'Chưa cập nhật' }}
                </p>
            </div>
        </div>

        <div v-else>
            <p class="text-center text-gray-500">Không có cơ sở lưu trú nào.</p>
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
import Pagination from '~/components/Pagination.vue';
import { useAuthFetch } from '~/composables/useAuthFetch';
import { slugify } from '~/utils/slug';

interface Accommodation {
    _id: string;
    name: string;
    description?: any;
    fullAddress?: string;
}

const accommodations = ref<Accommodation[]>([]);
const totalAccommodations = ref(0);
const totalPages = ref(1);
const limit = 10;

const route = useRoute();
const router = useRouter();

const page = ref(parseInt(route.query.page as string) || 1);

// tách biến hiển thị (tiếng Việt) và biến dùng để query (slug)
const rawSearch = ref('');
const search = ref('');

const fetchAccommodations = async () => {
    try {
        const query = new URLSearchParams();
        query.set('page', String(page.value));
        query.set('limit', String(limit));
        if (search.value) query.set('search', search.value);

        const url = `/api/v1/private/accommodation?${query.toString()}`;
        const response = await useAuthFetch(url, { method: 'GET' }, 'place');
        const res = response as { total?: number; data?: Accommodation[] };

        accommodations.value = res.data || [];
        totalAccommodations.value = res.total || 0;
        totalPages.value = Math.ceil((res.total || 0) / limit);
    } catch (error) {
        console.error('Error fetching accommodations:', error);
    }
};

const onSearchInput = () => {
    page.value = 1;
    search.value = slugify(rawSearch.value);
    updateQuery();
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
            search: search.value || undefined,
        },
    });
};

watch(
    () => route.query,
    () => {
        page.value = parseInt(route.query.page as string) || 1;
        search.value = (route.query.search as string) || '';
        fetchAccommodations();
    }
);

onMounted(() => {
    const querySearch = (route.query.search as string) || '';
    search.value = querySearch;
    rawSearch.value = querySearch;
    fetchAccommodations();
});
</script>
