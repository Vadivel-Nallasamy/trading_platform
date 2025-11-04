import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import VerifyOtp from "./authCards/verifyOtp";
const VerifyClient = lazy(() => import("./authCards/verifyUser"));
const VerifyPassword = lazy(() => import("./authCards/verifyPassword"));
export default function Auth() {
  const loginStage = useSelector((state) => state.auth.loginStage);
  return (
    <div className='flex flex-row w-screen h-screen'>
      <div className='flex-1'></div>
      <div className='flex-1 flex items-center justify-center'>
        <Suspense>
          <div className='authCard'>
            {loginStage == "userVerification" ? (
              <VerifyClient />
            ) : loginStage == "password" ? (
              <VerifyPassword />
            ) : loginStage == "otp" ? (
              <VerifyOtp />
            ) : null}
          </div>
        </Suspense>
      </div>
    </div>
  );
}
