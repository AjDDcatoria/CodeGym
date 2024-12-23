<script setup lang="ts">
import { VueMonacoEditor } from '@guolao/vue-monaco-editor'
import { ref, shallowRef } from 'vue'

const MONACO_EDITOR_OPTIONS = {
    automaticLayout: true,
    formatOnType: true,
    formatOnPaste: true,
}
const code = ref()
const editorRef = shallowRef()
const handleMount = (editor: Event) => (editorRef.value = editor)
</script>

<template>
    <VueMonacoEditor
        v-model:value="code"
        theme="vs-dark"
        language="python"
        style="height: 100%; width: 100%"
        :options="MONACO_EDITOR_OPTIONS"
        @mount="handleMount"
    />
</template>

<style scoped>

</style>
