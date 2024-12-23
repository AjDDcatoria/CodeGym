<script setup lang="ts">
import { Head } from "@inertiajs/vue3";
import Select from "primevue/select";
import { ref } from "vue";
import CodeEditor from "@/Components/Editor/CodeEditor.vue";
import TopBarEditor from "@/Components/Editor/TopBarEditor.vue";

const selectedDifficulty = ref();
const difficulties = ref([
    { name: 'Easy', code: 'easy' },
    { name: 'Medium', code: 'medium' },
    { name: 'Hard', code: 'hard' },
]);

const selectedMarkdown = ref<File | null>(null);
const selectedTestCases = ref<File | null>(null);

const triggerFileInput = (id:string) => {
    const fileInput = document.getElementById(id) as HTMLInputElement;
    fileInput.click();
}

const handleFileUploadMarkDown = (event: Event) => {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
        selectedMarkdown.value = input.files[0];
        console.log("File uploaded:", selectedMarkdown.value.name);
    }
};

const handleFileUploadTestCase = (event: Event) => {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
        selectedTestCases.value = input.files[0];
        console.log("File uploaded:", selectedTestCases.value.name);
    }
};
</script>

<template>
    <Head title="Create Problem" />
    <div class="h-dvh flex flex-col">
        <header class="border-b border-gray-300/40">
            <div class="max-w-[75rem] w-full p-4">
                <div>Logo</div>
            </div>
        </header>

        <main class="flex-1 flex justify-center">
            <div class="max-w-[50rem] w-full p-4 flex flex-col gap-3">
                <div class="border-b border-gray-300/30 py-5 text-2xl font-semibold px-1">
                    Create new problem
                </div>
                <div class="flex flex-col gap-4 px-2 border-b border-gray-300/30 pb-3">
                    <div class="flex flex-col gap-2">
                        <h3 class="text-xl font-semibold">Information</h3>
                        <div class="flex gap-4">
                            <div class="flex flex-col gap-2 w-1/2">
                                <label for="title">Title *</label>
                                <InputText placeholder="Enter title"/>
                                <small>The title must be unique to avoid conflicts.</small>
                            </div>
                            <div class="flex flex-col gap-2 w-1/2">
                                <label for="difficulty">Difficulty *</label>
                                <Select
                                    id="difficulty"
                                    v-model="selectedDifficulty"
                                    :options="difficulties"
                                    optionLabel="name"
                                    class="!bg-transparent"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex flex-col gap-2 w-fit">
                            <label for="readme-file">Description *</label>
                            <Button
                                id="readme-file"
                                label="Upload"
                                icon="pi pi-file"
                                size="small"
                                @click="() => triggerFileInput('readme-file-input')"
                            />
                            <input
                                id="readme-file-input"
                                type="file"
                                class="hidden"
                                accept=".md,text/markdown"
                                @change="handleFileUploadMarkDown"
                            />
                            <small>The file must be a readme file</small>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-4 border-b border-gray-300/30 pb-3 px-2">
                    <div class="flex flex-col gap-2">
                        <h3 class="text-xl font-semibold">Problem</h3>
                        <div class="flex flex-col gap-2">
                            <label for="">Problem Template *</label>
                            <div class="bg-[var(--card-background)] flex flex-col overflow-hidden h-[38rem] rounded-xl border border-gray-300/30">
                                <TopBarEditor />
                                <CodeEditor />
                            </div>
                            <div class="flex items-center gap-4 mt-5">
                                <div>
                                    <Button
                                        id="text-file"
                                        label="Upload testcase"
                                        icon="pi pi-file"
                                        size="small"
                                        @click="() => triggerFileInput('text-file-input')"
                                    />
                                    <input
                                        type="file"
                                        class="hidden"
                                        accept="text/plain"
                                        id="text-file-input"
                                        @change="handleFileUploadTestCase"
                                    />
                                </div>
                                <Button
                                    label="Create"
                                    severity="success"
                                    size="small"
                                    class="!px-5"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped>
header {
    background: var(--card-background);
    display: flex;
    justify-content: center;
    align-items: center;
}

label,
small {
    color: var(--text-secondary);
}
</style>
