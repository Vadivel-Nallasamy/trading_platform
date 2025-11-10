import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

import { Provider } from "react-redux";
import { store, persistor } from "./store/store.js";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.jsx";
import { PersistGate } from "redux-persist/integration/react";
createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </QueryClientProvider>
  // </StrictMode>
);
