import { loginUser, registerUser } from "../../API/authAPI";

import {
    loginFail,
    loginSuccess,
    loginStart,
    registerFail,
    registerSuccess,
    registerStart,
} from "./authSlice";

// Login
export const loginAction = (formData, navigate) => async (dispatch) => {
    try {
        dispatch(loginStart());




        const { data } = await loginUser(formData);

        dispatch(
            loginSuccess({
                user: data.user,
                token: data.token,
            })
        );

        localStorage.setItem("token", data.token);


        switch (data.user.role){
            case "doctor" : navigate("/doctor/dashboard");
            break;
            case "nurse" : navigate("/nurse/dashboard");
            break;
            case "patient" : navigate("/patient/dashboard");
            break;
            case "admin" : navigate("/admin/dashboard");
            break;
            default : navigate("/")
        }

    } catch (error) {
        dispatch(
            loginFail(
                error.response?.data?.message || "Login failed"
            )
        );
    }
};

// Register
export const registerAction = (formData, navigate) => async (dispatch) => {
    try {
        dispatch(registerStart());

        const { data } = await registerUser(formData);

        dispatch(
            registerSuccess({
                user: data.user,
                token: data.token,
            })
        );

        localStorage.setItem("token", data.token);

  switch (data.user.role){
            case "doctor" : navigate("/doctor/dashboard");
            break;
            case "nurse" : navigate("/nurse/dashboard");
            break;
            case "patient" : navigate("/patient/dashboard");
            break;
            case "admin" : navigate("/admin/dashboard");
            break;
            default : navigate("/")
        }
    } catch (error) {
        dispatch(
            registerFail(
                error.response?.data?.message || "Register failed"
            )
        );
    }
};