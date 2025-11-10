import { createBrowserRouter } from "react-router-dom";
import Auth from "../components/auth/Auth";
import AuthenticatedContent from "../authenticated";
import Home from "../components/home/home";
const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/",
    element: <AuthenticatedContent />,
    children: [
      { path: "home", element: <Home /> },
      { path: "orders", element: <Home /> },
    ],
  },
  {
    path: "*",
    element: <AuthenticatedContent />,
  },
]);

export default router;
