import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: null,
  loading: false,
  error: null,
};

const providerSlice = createSlice({
  name: "provider",
  initialState,
  reducers: {
    providerStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    providerSuccess: (state, action) => {
      state.loading = false;
      state.profile = action.payload;
    },

    providerFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    updateProviderSuccess: (state, action) => {
      state.loading = false;
      state.profile = action.payload;
    },

    clearProvider: (state) => {
      state.profile = null;
      state.error = null;
      state.loading = false;
    },
  },
});

export const {
  providerStart,
  providerSuccess,
  providerFail,
  updateProviderSuccess,
  clearProvider,
} = providerSlice.actions;

export default providerSlice.reducer;