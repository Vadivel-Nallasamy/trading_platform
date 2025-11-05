import { useNavigate } from "react-router-dom";
import authData from "../../../tanstackDataManager/authData";
import HeaderText from "../authPieces/headerText";
import LoginInput from "../authPieces/loginInput";
import LogoHeader from "../authPieces/logoHeader";
import SubmitButton from "../authPieces/submitButton";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setAccessToken } from "../../../store/authStore";

export default function VerifyOtp() {
  const { mutateAsync } = authData.verifyOtp({});
  const { mutateAsync: sendOtp } = authData.sendOtp({});

  const navigate = useNavigate();
  const userId = useSelector((state) => state.auth.userId);
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());
    const json = {
      source: "WEB",
      userId,
      otp: payload.otp,
    };
    await mutateAsync(json, {
      onSuccess: async (res) => {
        dispatch(await setAccessToken(res[0].accessToken));
        navigate("/home");
      },
    });
  };
  useEffect(() => {
    sendOtp({
      userId,
      source: "WEB",
    });
  }, []);
  return (
    <form onSubmit={handleSubmit}>
      <LogoHeader />
      <HeaderText
        label="Please verify it's you"
        subText='AN OTP has been sent to your registered mobile number'
      />
      <LoginInput
        label='Enter OTP'
        id='verify_otp'
        name='otp'
        maxLength='6'
        placeholder='Enter Your OTP'
      />
      <SubmitButton label='Verify OTP' />
    </form>
  );
}
