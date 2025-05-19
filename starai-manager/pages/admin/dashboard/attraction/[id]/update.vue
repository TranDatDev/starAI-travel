<template>
    <div v-if="attraction">
        <h1 class="text-2xl font-bold mb-4">Cập nhật {{ attraction.name }}</h1>

        <form @submit.prevent="updateAttraction">
            <div class="mb-4">
                <label for="name" class="block">Tên</label>
                <input type="text" id="name" v-model="attraction.name" class="input" required />
            </div>

            <div class="mb-4">
                <label for="address" class="block">Địa chỉ</label>
                <input
                    type="text"
                    id="address"
                    v-model="attraction.address"
                    class="input"
                    required
                />
            </div>

            <div class="mb-4">
                <label for="description" class="block">Mô tả</label>
                <textarea
                    id="description"
                    v-model="attraction.description.vi"
                    class="input"
                    required
                />
            </div>

            <div class="mb-4">
                <button type="submit" class="btn btn-primary">Cập nhật</button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuthFetch } from '~/composables/useAuthFetch';

interface Attraction {
    name: string;
    address: string;
    description: { vi: string; en: string };
    // Thêm các trường khác nếu cần
}

const route = useRoute();
const router = useRouter();
const attraction = ref<Attraction | null>(null);

const fetchAttractionById = async () => {
    try {
        const url = `api/v1/private/attraction/${route.params.id}`;
        const response = await useAuthFetch(url, { method: 'GET' }, 'place');
        attraction.value = response as Attraction;
    } catch (error) {
        console.error('Error fetching attraction:', error);
    }
};

const updateAttraction = async () => {
    try {
        const url = `api/v1/private/attraction/${route.params.id}`;
        const response = await useAuthFetch(
            url,
            {
                method: 'PATCH',
                body: attraction.value,
            },
            'place'
        );

        // Sau khi cập nhật thành công, chuyển hướng người dùng về trang chi tiết
        router.push(`/attraction/${route.params.id}`);
    } catch (error) {
        console.error('Error updating attraction:', error);
    }
};

onMounted(() => {
    fetchAttractionById();
});
</script>

<style scoped>
.input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.btn {
    background-color: #4caf50;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.btn-primary {
    background-color: #007bff;
}
</style>
