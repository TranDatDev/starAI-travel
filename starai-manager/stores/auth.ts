// stores/auth.ts
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: useCookie('token').value || null,
        adminId: useCookie('adminId').value || null,
        managerId: useCookie('managerId').value || null,
        role: useCookie('role').value || null,
    }),
    actions: {
        async login({
            email,
            password,
            superkey,
            adminkey,
            role,
        }: {
            email: string;
            password: string;
            superkey: string;
            adminkey?: string;
            role: 'admin' | 'manager';
        }) {
            const config = useRuntimeConfig();
            const apiUrl = config.public.userServiceUrl;

            console.log('API URL:', apiUrl);
            console.log('Login data:', { email, password, superkey, adminkey });

            try {
                const response = await $fetch<{ access_token?: string; id?: string }>(
                    `${apiUrl}/api/v1/auth/login`,
                    {
                        method: 'POST',
                        body: { email, password, superkey, adminkey },
                    }
                );

                console.log('Login response:', response);

                const accessToken = response.access_token;
                const userId = response.id;

                if (!accessToken || !userId) {
                    throw new Error('Thông tin người dùng không hợp lệ');
                }

                // Lưu token
                this.token = accessToken;
                useCookie('token').value = accessToken;

                // Lưu thông tin tùy theo vai trò
                if (role === 'admin') {
                    this.role = 'admin';
                    this.adminId = userId;
                    useCookie('adminId').value = userId;
                    useCookie('role').value = 'admin';
                } else if (role === 'manager') {
                    this.role = 'manager';
                    this.managerId = userId;
                    useCookie('managerId').value = userId;
                    useCookie('role').value = 'manager';
                } else {
                    throw new Error('Vai trò không hợp lệ');
                }
            } catch (error) {
                console.error('Login error:', error);
                throw createError({ statusCode: 401, statusMessage: 'Đăng nhập thất bại' });
            }
        },

        logout() {
            this.token = null;
            this.adminId = null;
            this.managerId = null;
            this.role = null;
            useCookie('token').value = null;
            useCookie('adminId').value = null;
            useCookie('managerId').value = null;
            useCookie('role').value = null;
        },
    },
});
