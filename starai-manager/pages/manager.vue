<template>
    <NuxtLayout name="manager">
        <NuxtPage />
    </NuxtLayout>
</template>

<script>
definePageMeta({
    middleware: ['manager'],
});
</script>
