// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            placeServiceUrl: process.env.VITE_PLACE_SERVICE_URL || 'http://localhost:3001',
            userServiceUrl: process.env.VITE_USER_SERVICE_URL || 'http://localhost:3002',
        },
    },
    compatibilityDate: '2024-11-01',
    devtools: { enabled: false },
    css: ['~/assets/css/main.css'],
    vite: {
        plugins: [tailwindcss()],
    },
    icon: {
        mode: 'css',
        cssLayer: 'base',
    },
    ssr: false,
    modules: ['@nuxt/icon', '@nuxt/image', '@pinia/nuxt'],
});
