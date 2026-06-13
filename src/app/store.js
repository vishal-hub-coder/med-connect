import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import providerReducer from "../features/provider/providerSlice";
export const store = configureStore({
    reducer : {
        auth : authReducer,
        provider : providerReducer
    }
})