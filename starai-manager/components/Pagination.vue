<template>
    <div class="flex justify-center space-x-2 mt-6">
        <button
            @click="changePage(currentPage - 1)"
            :disabled="currentPage === 1"
            class="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
            Trước
        </button>

        <button
            v-for="page in totalPages"
            :key="page"
            @click="changePage(page)"
            :class="[
                'px-3 py-1 rounded',
                page === currentPage ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300',
            ]"
        >
            {{ page }}
        </button>

        <button
            @click="changePage(currentPage + 1)"
            :disabled="currentPage === totalPages"
            class="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
            Sau
        </button>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    totalPages: { type: Number, required: true },
    currentPage: { type: Number, required: true },
});

const emit = defineEmits(['update:page']);

const changePage = (page: number) => {
    if (page >= 1 && page <= props.totalPages) {
        emit('update:page', page);
    }
};
</script>
