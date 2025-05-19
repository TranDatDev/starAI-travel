<template>
    <label class="block mb-1 font-semibold">
        <slot />
        <span v-if="required" class="text-red-500">*</span>
    </label>
</template>

<script setup lang="ts">
defineProps<{
    required?: boolean;
}>();
</script>
