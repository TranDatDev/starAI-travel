import { authApi } from '@/services/api';

export const login = async (email: string, password: string) => {
    try {
        const response = await authApi.post('/api/v1/auth/login', { email, password });
        return response.data;
    } catch (error) {
        throw new Error('Login failed');
    }
};

export const register = async (email: string, password: string) => {
    try {
        const response = await authApi.post('/api/v1/auth/register', { email, password });
        return response.data;
    } catch (error) {
        throw new Error('Registration failed');
    }
};
