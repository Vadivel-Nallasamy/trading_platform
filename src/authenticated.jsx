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
    <div className='h-screen w-screen flex flex-col'>
      <Header />
      <div className='flex h-full  '>
        <Aside />
        <main className=' mx-3 h-full border rounded-xl flex flex-col flex-1 min-w-0 border-primaryBorder'>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
