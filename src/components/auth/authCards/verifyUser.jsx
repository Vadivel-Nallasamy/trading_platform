import logo from "../../../assets/auth/logo.jpg";
import HeaderText from "../authPieces/headerText";
import LoginInput from "../authPieces/loginInput";
import SubmitButton from "../authPieces/submitButton";
export default function VerifyClient() {
  return (
    <form className='authCard'>
      <figure className='centerFlex mb-6'>
        <img src={logo} />
      </figure>

      <HeaderText
        label='Welcome to Dhanush!'
        subText='Smarter investing starts here'
      />
      <LoginInput
        label='Mobile No / Email ID / Client ID'
        customId='verify_client'
        placeHolder='Enter Your Mobile No / Email ID / Client ID'
      />
      <SubmitButton label='Continue' />
    </form>
  );
}
