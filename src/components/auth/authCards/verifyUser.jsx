import HeaderText from "../authPieces/headerText";
import LoginInput from "../authPieces/loginInput";
import SubmitButton from "../authPieces/submitButton";
import authData from "../../../tanstackDataManager/authData";
import { setUserId, setLoginStage } from "../../../store/authStore";
import { useDispatch } from "react-redux";
import LogoHeader from "../authPieces/logoHeader";
export default function VerifyClient() {
  // const userId = useSelector((state) => state..userId);
  const dispatch = useDispatch();
  const { mutateAsync } = authData.verifyClient({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());
    await mutateAsync(
      {
        userId: payload.userId,
      },
      {
        onSuccess: () => {
          dispatch(setUserId(payload.userId));
          dispatch(setLoginStage("password"));
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
      <LoginInput
        label='Mobile No / Email ID / Client ID'
        id='verify_client'
        name='userId'
        placeholder='Enter Your Mobile No / Email ID / Client ID'
      />
      <SubmitButton label='Continue' />
    </form>
  );
}
