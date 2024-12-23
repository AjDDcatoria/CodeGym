<script setup lang="ts">
import Select from 'primevue/select';
import { ref } from "vue";

const selectedCity = ref( { name: 'Python', code: 'py' },);
const cities = ref([
    { name: 'Python', code: 'py' },
    { name: 'Java', code: 'java' },
    { name: 'C++', code: 'cpp' },
    { name: 'PHP', code: 'php' },
    { name: 'Javascript', code: 'js' },
]);
</script>

<template>
    <div class="py-2 px-3 flex items-center">
        <div class="flex items-center gap-2">
            <label for="select_language">Language</label>
            <Select
                id="select_language"
                v-model="selectedCity"
                :options="cities"
                optionLabel="name"
                size="small"
                placeholder="Select a City"
                class="w-[10rem]"
            />
        </div>
    </div>
</template>

<style scoped>

</style>
