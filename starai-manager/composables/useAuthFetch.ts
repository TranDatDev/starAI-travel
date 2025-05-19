import { useAuthStore } from '~/stores/auth';

export const useAuthFetch = async (
    url: string,
    options: { headers?: Record<string, string>; method?: string; body?: any } = {},
    service: 'user' | 'place'
) => {
    const authStore = useAuthStore();
    const config = useRuntimeConfig();

    const headers = {
        Authorization: authStore.token ? `Bearer ${authStore.token}` : '',
        ...options.headers,
    };

    const baseURL =
        service === 'user' ? config.public.userServiceUrl : config.public.placeServiceUrl;

    return await $fetch(url, {
        baseURL: baseURL as string,
        headers,
        method: options.method as
            | 'GET'
            | 'HEAD'
            | 'PATCH'
            | 'POST'
            | 'PUT'
            | 'DELETE'
            | 'CONNECT'
            | 'OPTIONS'
            | 'TRACE'
            | undefined,
        body: options.body,
    });
};
