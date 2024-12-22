<script setup lang="ts">
import AuthLayout from "@/Layouts/AuthLayout.vue";
import { Head, useForm } from "@inertiajs/vue3";
import { useToast } from "primevue/usetoast";
import { LOGIN_CREDENTIALS_DEFAULT } from "./defaults/credentials";
import { AuthCredentialsTypes } from "./types/usertypes";

defineProps({
    canResetPassword: Boolean,
    status: String,
});

const toast = useToast();
const form = useForm<AuthCredentialsTypes>({ ...LOGIN_CREDENTIALS_DEFAULT });

const submit = (): void => {
    form.post(route("login"), {
        onError: (error) => {
            Object.values(error).forEach((message) => {
                toast.add({
                    severity: "error",
                    summary: "Error",
                    detail: message,
                });
            });
        },
        onSuccess: () => form.reset("password"),
    });
};
</script>

<template>
    <Head title="Login" />

    <AuthLayout>
        <template #title>Login to CodeGym</template>
        <template #form>
            <form class="flex-column mt-5" @submit.prevent="submit">
                <div class="flex-column">
                    <label for="email" class="text-[var(--text-secondary)]">
                        Email
                    </label>
                    <InputText
                        id="email"
                        aria-describedby="email-help"
                        v-model="form.email"
                    />
                </div>
                <div class="flex-column">
                    <label for="password" class="text-[var(--text-secondary)]">
                        Password
                    </label>
                    <Password
                        id="password"
                        toggleMask
                        fluid
                        v-model="form.password"
                        :feedback="false"
                    />
                </div>
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <Checkbox
                            id="remember"
                            binary
                            variant="filled"
                            v-model="form.remember"
                        />
                        <label for="remember"> Remember me </label>
                    </div>
                    <Link
                        v-if="canResetPassword"
                        :href="route('password.request')"
                    >
                        <Button label="Forgot password?" variant="link" />
                    </Link>
                </div>
                <Button
                    type="submit"
                    label="Log in"
                    :disabled="
                        form.email.length == 0 ||
                        form.password.length == 0 ||
                        form.processing
                    "
                />
            </form>
            <Divider align="center">
                <small> OR </small>
            </Divider>
            <div class="flex-column">
                <Button
                    icon="pi pi-github"
                    label="Login with Github"
                    variant="outlined"
                    class="!border-gray-50/40 !text-gray-50"
                />
                <Button
                    icon="pi pi-google"
                    label="Login with Google"
                    variant="outlined"
                    class="!border-gray-50/40 !text-gray-50"
                />
            </div>
        </template>
        <template #footer>
            <div class="mt-8 text-[var(--text-secondary)]">
                New to CodeGym?
                <Link :href="route('register')">
                    <Button
                        icon="pi pi-arrow-right"
                        label="Create account"
                        variant="link"
                        class="flex-row-reverse !p-0"
                    />
                </Link>
            </div>
        </template>
    </AuthLayout>
</template>

<style scoped>
.flex-column {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
</style>
