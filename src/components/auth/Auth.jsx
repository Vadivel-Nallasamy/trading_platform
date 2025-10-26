import VerifyClient from "./authCards/verifyUser";

export default function Auth() {
  return (
    <div className='flex flex-row w-screen h-screen'>
      <div className='flex-1'></div>
      <div className='flex-1 flex items-center justify-center'>
        <VerifyClient />
      </div>
    </div>
  );
}
