// import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import Header from "./components/header/Header";
import Aside from "./components/Aside/Aside";
export default function AuthenticatedContent() {
  //const isLoggedIn = useSelector((state) => state.auth.accessToken);
  //   if (!isLoggedIn) {
  //     return <Navigate to='/auth' replace />;
  //   }
  return (
    <div>
      <Header />
      <main className='flex'>
        <Aside />
        <Outlet />
      </main>
    </div>
  );
}
