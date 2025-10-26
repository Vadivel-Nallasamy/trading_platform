import { createBrowserRouter } from "react-router-dom";
import Auth from "../components/auth/Auth";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "*",
    element: <Auth />,
  },
]);

export default router;
