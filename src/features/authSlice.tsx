import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    token: "",
    email: "",
  },
  reducers: {
    loginSuccess: (state, { payload }) => {
      state.token = payload.token;
      state.email = payload.email;      
    },
    registerSuccess: (state, { payload }) => {
      state.token = payload.token;
      state.email = payload.email;        
    },
    logoutSuccess: (state) => {
      state.token = "";
      state.email = ""; 
    },
  },
});

export const { loginSuccess, registerSuccess, logoutSuccess } = authSlice.actions;
export default authSlice.reducer;
