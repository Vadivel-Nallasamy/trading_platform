import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authStore";
import watchReducer from "./watchStore";
export const store = configureStore({
  reducer: { auth: authReducer, watch: watchReducer },
});
