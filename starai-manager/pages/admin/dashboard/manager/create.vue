<template>
    <div class="mx-auto">
        <h1 class="text-3xl font-bold mb-2">Tạo quản trị viên</h1>
        <form @submit.prevent="handleSubmit" class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="col-span-2">
                <InputLabel required>Tên</InputLabel>
                <input v-model="form.email" type="text" class="input" required />
            </div>
            <div class="col-span-2">
                <InputLabel required>Mật khẩu</InputLabel>
                <input v-model="form.password" type="password" class="input" required />
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
const form = ref({
    email: '',
    password: '',
});

const handleSubmit = async () => {
    console.log('Submitting form:', form.value);
    try {
        const response = await useAuthFetch(
            '/api/v1/private/admin/create-manager',
            {
                method: 'POST',
                body: form.value,
            },
            'user'
        );
        if (!response) {
            alert('Có lỗi xảy ra khi tạo quản trị viên.');
        }
        console.log('Manager created:', response);
        alert('Quản trị viên đã được tạo thành công!');
        navigateTo('/admin/dashboard/manager');
    } catch (error) {
        console.error('Error creating manager:', error);
    }
};
</script>
