import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./authStore";
import watchReducer from "./watchStore";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { persistStore } from "redux-persist";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["watch"],
};
const rootReducer = combineReducers({
  watch: watchReducer,
  auth: authReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // redux-persist uses non-serializable values internally
    }),
});
export const persistor = persistStore(store);
