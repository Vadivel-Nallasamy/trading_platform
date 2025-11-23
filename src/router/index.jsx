import { createBrowserRouter } from "react-router-dom";
import Auth from "../components/auth/Auth";
import AuthenticatedContent from "../authenticated";
import Home from "../components/home/home";
import Orders from "../components/orders/orders";
import OpenOrders from "../components/orders/open/openOrders";
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
      {
        path: "orders",
        element: <Orders />,
        children: [{ path: "open", element: <OpenOrders /> }],
      },
    ],
  },
  {
    path: "*",
    element: <AuthenticatedContent />,
  },
]);

export default router;
