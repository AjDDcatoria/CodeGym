import "../css/app.css";
import "./bootstrap";

import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createApp, DefineComponent, h } from "vue";
import { ZiggyVue } from "../../vendor/tightenco/ziggy";
import PrimeVue from "primevue/config";
import { MyPreset } from "@/Constants/theme";

// UI Components
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Checkbox from "primevue/checkbox";
import Divider from "primevue/divider";
import Card from "primevue/card";
import { Link } from "@inertiajs/vue3";
import ToastService from "primevue/toastservice";
import Popover from "primevue/popover";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob<DefineComponent>("./Pages/**/*.vue")
        ),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .component("InputText", InputText)
            .component("Button", Button)
            .component("Password", Password)
            .component("Checkbox", Checkbox)
            .component("Divider", Divider)
            .component("Card", Card)
            .component("Link", Link)
            .component("Popover", Popover)
            .use(ToastService)
            .use(PrimeVue, {
                theme: {
                    preset: MyPreset,
                },
            })
            .use(ZiggyVue)
            .mount(el);
    },
    progress: {
        color: "#4B5563",
    },
});
