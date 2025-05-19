<template>
    <div class="flex">
        <!-- Sidebar cố định -->
        <aside class="fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white flex flex-col z-10">
            <div class="h-16 flex items-center justify-center border-b border-gray-700">
                <span class="text-xl font-bold">manager</span>
            </div>
            <nav class="flex-1 p-4 space-y-2 overflow-y-auto">
                <NuxtLink
                    to="/manager/dashboard/partner"
                    class="block px-4 py-2 rounded hover:bg-gray-700"
                >
                    Đối tác
                </NuxtLink>
                <NuxtLink
                    to="/manager/dashboard/user"
                    class="block px-4 py-2 rounded hover:bg-gray-700"
                >
                    Người dùng
                </NuxtLink>
            </nav>
            <div class="p-4 border-t border-gray-700">
                <button
                    @click="handleLogout"
                    class="w-full text-left px-4 py-2 rounded hover:bg-gray-700"
                >
                    Đăng xuất
                </button>
            </div>
        </aside>

        <!-- Main content -->
        <main class="ml-64 flex-1 px-12 py-6">
            <!-- Breadcrumb -->
            <nav class="mb-4 text-sm text-gray-600">
                <ul class="flex space-x-2 items-center">
                    <li
                        v-for="(crumb, index) in breadcrumbs"
                        :key="crumb.path"
                        class="flex items-center"
                    >
                        <NuxtLink
                            :to="crumb.path"
                            class="hover:underline"
                            :class="{
                                'font-semibold text-black': index === breadcrumbs.length - 1,
                            }"
                        >
                            {{ crumb.name }}
                        </NuxtLink>
                        <span v-if="index < breadcrumbs.length - 1" class="mx-2">›</span>
                    </li>
                </ul>
            </nav>

            <!-- Page Content -->
            <slot />
        </main>
    </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { useAuthStore } from '~/stores/auth';
import { computed } from 'vue';

const router = useRouter();
const route = useRoute();
const auth = useAuthStore();

const handleLogout = () => {
    auth.logout();
    router.push('/login');
};

const formatName = (segment: string) => {
    const map: Record<string, string> = {
        manager: 'Quản trị viên',
        dashboard: 'Bảng điều khiển',
    };
    return map[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
};

const breadcrumbs = computed(() => {
    const segments = route.path.split('/').filter(Boolean);
    return segments.map((seg, index) => ({
        name: formatName(seg),
        path: '/' + segments.slice(0, index + 1).join('/'),
    }));
});
</script>
