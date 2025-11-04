import { Fragment } from "react";
import LogoHeader from "../authPieces/logoHeader";
import HeaderText from "../authPieces/headerText";
import DisabledHeader from "../authPieces/disabledInput";
import LoginInput from "../authPieces/loginInput";
import SubmitButton from "../authPieces/submitButton";
import { useDispatch, useSelector } from "react-redux";
import { setLoginStage, setAccessToken } from "../../../store/authStore";
import authData from "../../../tanstackDataManager/authData";

export default function VerifyPassword() {
  const userId = useSelector((state) => state.auth.userId);
  const dispatch = useDispatch();
  const { mutateAsync } = authData.verifyPassword({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());
    const json = {
      userId: userId,
      password: payload.password,
      source: "WEB",
    };
    await mutateAsync(
      json,

      {
        onSuccess: (res) => {
          dispatch(setAccessToken(res[0]?.token));
          dispatch(setLoginStage("otp"));
        },
      }
    );
  };
  return (
    <form onSubmit={handleSubmit}>
      <LogoHeader />
      <HeaderText
        label='Welcome to Dhanush!'
        subText='Smarter investing starts here'
      />
      <DisabledHeader />
      <LoginInput
        label='Password'
        id='verify_password'
        name='password'
        placeholder='Enter Your Password'
      />
      <SubmitButton label='Continue' />
    </form>
  );
}
