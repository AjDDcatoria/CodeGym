declare module 'splitpanes' {
    import { DefineComponent } from 'vue'

    export const Splitpanes: DefineComponent<
        Record<string, unknown>,
        Record<string, unknown>,
        unknown
    >
    export const Pane: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>
}
