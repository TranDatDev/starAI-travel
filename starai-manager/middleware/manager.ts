export default defineNuxtRouteMiddleware(() => {
    const role = useCookie('role').value;

    if (role !== 'manager') {
        return navigateTo('/login');
    }
});
