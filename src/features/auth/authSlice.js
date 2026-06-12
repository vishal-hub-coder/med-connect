import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    user: null,
    token: localStorage.getItem('token') || null,
    isAuthenticated: false,
    loading: false,
    error: null
};



const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
            state.error = null;

        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        loginFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.token
                = null;
            localStorage.removeItem('token');

        },
        registerStart: (state) => {
            state.loading = true;
            state.error = null;
        },

        registerSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
        },

        registerFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
});

export const { loginStart, loginSuccess, loginFail, logout , registerFail,registerStart,registerSuccess} = authSlice.actions;
export default authSlice.reducer;