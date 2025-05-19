<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <form
            @submit.prevent="handleLogin"
            class="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-4"
        >
            <h2 class="text-2xl font-bold text-center text-gray-800">Đăng nhập</h2>

            <input
                v-model="email"
                type="email"
                placeholder="Email"
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                v-model="password"
                type="password"
                placeholder="Mật khẩu"
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                v-model="superkey"
                type="password"
                placeholder="Khóa 1"
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                v-model="adminkey"
                type="password"
                placeholder="Khóa 2"
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
                v-model="role"
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
            </select>

            <button
                type="submit"
                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
            >
                Đăng nhập
            </button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';

const authStore = useAuthStore();
const email = ref('');
const password = ref('');
const superkey = ref('');
const adminkey = ref('');
const role = ref<'admin' | 'manager'>('manager');

const handleLogin = async () => {
    try {
        await authStore.login({
            email: email.value,
            password: password.value,
            superkey: superkey.value,
            adminkey: adminkey.value,
            role: role.value,
        });
        navigateTo(`/${role.value}/dashboard`);
    } catch (error) {
        console.error('Đăng nhập thất bại:', error);
    }
};
</script>
