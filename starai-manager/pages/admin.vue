<template>
    <NuxtLayout name="admin">
        <NuxtPage />
    </NuxtLayout>
</template>

<script>
definePageMeta({
    middleware: ['admin'],
});
</script>
