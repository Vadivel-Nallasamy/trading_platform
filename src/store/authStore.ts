import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  userId: "",
  loginStage: "userVerification",
  accessToken: "",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setLoginStage: (state, action) => {
      state.loginStage = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
});
export const { setUserId, setLoginStage, setAccessToken } = authSlice.actions;
export default authSlice.reducer;
