export default defineNuxtRouteMiddleware((to) => {
    const token = useCookie('token').value;
    const role = useCookie('role').value;

    // Nếu không có token và không phải trang login -> redirect
    if (!token && to.path !== '/login') {
        return navigateTo('/login');
    }

    // Nếu đã login và đang ở /login -> redirect sang dashboard
    if (token && to.path === '/login') {
        if (role === 'admin') return navigateTo('/admin/dashboard');
        if (role === 'manager') return navigateTo('/manager/dashboard');
    }
});
