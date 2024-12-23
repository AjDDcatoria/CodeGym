<script setup lang="ts">
import TopBarEditor from "@/Components/Editor/TopBarEditor.vue";
import CodeEditor from "@/Components/Editor/CodeEditor.vue";
import OutputTopbar from "@/Components/Editor/OutputTopbar.vue";
import { Splitpanes, Pane } from 'splitpanes'

</script>

<template>
    <div class="h-dvh flex flex-col p-2">
        <header class="h-16 flex items-center px-2">Test Header</header>
        <Splitpanes class="gap-1">
            <Pane class="pane p-3" :size="50" :min-size="25">
                <div>Problem</div>
            </Pane>
            <Pane :size="50" :min-size="25">
                <Splitpanes horizontal class="gap-1">
                    <Pane class="pane" :size="70" :min-size="20">
                        <TopBarEditor/>
                        <CodeEditor />
                    </Pane>
                    <Pane class="pane p-3" :size="30" :min-size="25">
                        <OutputTopbar />
                    </Pane>
                </Splitpanes>
            </Pane>
        </Splitpanes>
    </div>
</template>

<style scoped>
.pane {
    background:var(--card-background);
    border-radius:0.5rem;
    border: 1px solid  rgb(209 213 219 / 0.2);
}
</style>
