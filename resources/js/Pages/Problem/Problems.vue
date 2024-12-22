<script setup lang="ts">
import { Head } from "@inertiajs/vue3";
import { ref } from "vue";
import Popover from "primevue/popover";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import { ProblemsInterface } from "@/Pages/Problem/types";

const props = defineProps<ProblemsInterface>();
const difficultyRef = ref();
const statusRef = ref();
const tagsRef = ref();
</script>
<template>
    <Head title="Problems" />
    <div class="h-dvh flex flex-col">
        <header class="border-b border-gray-300/40">
            <div class="layout-max-width">
                <div>Logo</div>
            </div>
        </header>

        <main class="flex-1 flex justify-center">
            <div class="layout-max-width flex flex-col gap-3 py-5">
                <!-- Top bar -->
                <div class="flex justify-between">
                    <div>
                        <div class="flex gap-5">
                            <Button
                                label="Difficulty"
                                size="small"
                                icon="pi pi-angle-down"
                                @click="(event) => difficultyRef.toggle(event)"
                                class="flex-row-reverse !bg-[var(--card-background)] !text-gray-200 !border-none"
                            />
                            <Popover ref="difficultyRef">
                                <div>Not available</div>
                            </Popover>
                            <Button
                                label="Status"
                                size="small"
                                icon="pi pi-angle-down"
                                @click="(event) => statusRef.toggle(event)"
                                class="flex-row-reverse !bg-[var(--card-background)] !text-gray-200 !border-none"
                            />
                            <Popover ref="statusRef">
                                <div>Not available</div>
                            </Popover>
                            <Button
                                label="Tags"
                                icon="pi pi-angle-down"
                                size="small"
                                @click="(event) => tagsRef.toggle(event)"
                                class="flex-row-reverse !bg-[var(--card-background)] !text-gray-200 !border-none"
                            />
                            <Popover ref="tagsRef">
                                <div>Not available</div>
                            </Popover>
                        </div>
                    </div>
                    <div class="flex gap-5">
                        <div>
                            <IconField>
                                <InputIcon class="pi pi-search" />
                                <InputText
                                    placeholder="Search problem"
                                    size="small"
                                    class="!bg-[var(--card-background)] !border-none"
                                />
                            </IconField>
                        </div>
                        <div>
                            <div class="flex gap-2 items-center">
                                <Button
                                    id="pick-one"
                                    icon="pi pi-code !text-xl"
                                    rounded
                                    severity="success"
                                    size="small"
                                    class="!border-none"
                                />
                                <label for="pick-one" class="text-green-300">
                                    Pick one
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Table -->
                <div class="flex-1">
                    <table class="w-full">
                        <thead class="border-b border-gray-300/20">
                            <tr class="text-[var(--text-secondary)] h-12">
                                <td class="w-20">Status</td>
                                <td>Title</td>
                                <td>Solution</td>
                                <td>Acceptance</td>
                                <td class="w-20">Difficulty</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="problem in problem_list" class="h-12">
                                <td></td>
                                <td>
                                    <Link
                                        :href="
                                            route(
                                                'problem.show',
                                                problem.title.replace(/\s+/g, '-')
                                            )
                                        "
                                    >
                                        <Button
                                            type="button"
                                            :label="`${problem.id}. ${problem.title}`"
                                            variant="link"
                                            class="!text-gray-200 hover:!text-purple-400 !p-0"
                                        />
                                    </Link>
                                </td>
                                <td><i class="pi pi-file-check"></i></td>
                                <td>
                                    {{
                                        problem.acceptance_rate == "0.00"
                                            ? "0"
                                            : problem.acceptance_rate
                                    }}%
                                </td>
                                <td
                                    v-if="problem.difficulty == 'easy'"
                                    class="text-green-400"
                                >
                                    Easy
                                </td>
                                <td
                                    v-else-if="problem.difficulty == 'medium'"
                                    class="text-yellow-400"
                                >
                                    Medium
                                </td>
                                <td
                                    v-else-if="problem.difficulty == 'hard'"
                                    class="text-red-400"
                                >
                                    Hard
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped>
.h-dvh {
    height: 100dvh;
}
header {
    background: var(--card-background);
    display: flex;
    justify-content: center;
    align-items: center;
}

.layout-max-width {
    max-width: 75rem;
    width: 100%;
    padding: 1rem;
}

table tr td {
    padding: 0 1rem;
}

table tbody tr:nth-child(even) {
    background: var(--card-background);
}
</style>
