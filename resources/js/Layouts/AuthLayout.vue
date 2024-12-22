<script setup lang="ts">
import Toast from "primevue/toast";
</script>

<template>
    <div class="h-dvh flex items-center justify-center">
        <Card class="max-w-[28rem] w-full p-4">
            <template #title>
                <h3 class="text-2xl">
                    <slot name="title" />
                </h3>
            </template>
            <template #content>
                <slot name="form" />
            </template>
            <template #footer>
                <slot name="footer" />
            </template>
        </Card>
        <Toast :life="5000" position="bottom-right" />
    </div>
</template>
