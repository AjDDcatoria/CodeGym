import Aura from "@primevue/themes/aura";
import { definePreset } from "@primevue/themes";

export const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: "{purple.50}",
            100: "{purple.100}",
            200: "{purple.200}",
            300: "{purple.300}",
            400: "{purple.400}",
            500: "{purple.500}",
            600: "{purple.600}",
            700: "{purple.700}",
            800: "{purple.800}",
            900: "{purple.900}",
            950: "{purple.950}",
        },
    },
    components: {
        card: {
            background: "var(--card-background)",
        },
        inputtext: {
            background: "var(--inputtext-background)",
        },
        divider: {
            content: {
                background: "var(--card-background)",
                color: "var(--text-secondary)",
            },
        },
        toast: {
            error: {
                background: "var(--toast-error-background)",
            },
        },
    },
});