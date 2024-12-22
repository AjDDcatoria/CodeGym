import { AuthCredentialsTypes } from "../types/usertypes";

export const LOGIN_CREDENTIALS_DEFAULT: AuthCredentialsTypes = {
    email: "",
    password: "",
    remember: false,
};

export const REGISTER_CREDENTIALS_DEFAULT: AuthCredentialsTypes = {
    email: "",
    password: "",
    password_confirmation: "",
};
