export default defineNuxtRouteMiddleware(() => {
    const role = useCookie('role').value;

    if (role !== 'admin') {
        return navigateTo('/login');
    }
});
