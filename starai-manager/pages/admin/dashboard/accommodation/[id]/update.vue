<template>
    <div v-if="accommodation">
        <h1 class="text-2xl font-bold mb-4">Cập nhật {{ accommodation.name }}</h1>

        <form @submit.prevent="updateAccommodation">
            <div class="mb-4">
                <label for="name" class="block">Tên</label>
                <input type="text" id="name" v-model="accommodation.name" class="input" required />
            </div>

            <div class="mb-4">
                <label for="address" class="block">Địa chỉ</label>
                <input
                    type="text"
                    id="address"
                    v-model="accommodation.address"
                    class="input"
                    required
                />
            </div>

            <div class="mb-4">
                <label for="description" class="block">Mô tả</label>
                <textarea
                    id="description"
                    v-model="accommodation.description.vi"
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

interface Accommodation {
    name: string;
    address: string;
    description: { vi: string; en: string };
    // Thêm các trường khác nếu cần
}

const route = useRoute();
const router = useRouter();
const accommodation = ref<Accommodation | null>(null);

const fetchAccommodationById = async () => {
    try {
        const url = `api/v1/private/accommodation/${route.params.id}`;
        const response = await useAuthFetch(url, { method: 'GET' }, 'place');
        accommodation.value = response as Accommodation;
    } catch (error) {
        console.error('Error fetching accommodation:', error);
    }
};

const updateAccommodation = async () => {
    try {
        const url = `api/v1/private/accommodation/${route.params.id}`;
        const response = await useAuthFetch(
            url,
            {
                method: 'PATCH',
                body: accommodation.value,
            },
            'place'
        );

        // Sau khi cập nhật thành công, chuyển hướng người dùng về trang chi tiết
        router.push(`/accommodation/${route.params.id}`);
    } catch (error) {
        console.error('Error updating accommodation:', error);
    }
};

onMounted(() => {
    fetchAccommodationById();
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
