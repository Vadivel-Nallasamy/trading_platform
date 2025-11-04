import { useState } from "react";

export default function LoginInput({ label, customId, ...props }) {
  const [isTypePassword, setIsTypePassword] = useState(false);
  const setPasswordType = () => {
    setIsTypePassword((prevState) => {
      !prevState;
    });
  };
  const eyeClose = (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clip-path='url(#clip0_3143_1196)'>
        <path
          d='M8.23454 8.23332C7.98891 8.46219 7.79191 8.73819 7.65527 9.04486C7.51863 9.35152 7.44515 9.68257 7.43923 10.0182C7.43331 10.3539 7.49506 10.6873 7.62079 10.9986C7.74653 11.3099 7.93368 11.5927 8.17108 11.8301C8.40847 12.0675 8.69125 12.2547 9.00255 12.3804C9.31384 12.5061 9.64727 12.5679 9.98295 12.562C10.3186 12.556 10.6497 12.4826 10.9563 12.3459C11.263 12.2093 11.539 12.0123 11.7679 11.7666M8.94295 4.23341C9.29404 4.18967 9.64748 4.16741 10.0013 4.16675C15.8346 4.16675 18.3346 10.0001 18.3346 10.0001C17.962 10.7977 17.4948 11.5475 16.943 12.2334M5.50964 5.5085C3.85234 6.63736 2.52619 8.18789 1.66797 10.0002C1.66797 10.0002 4.16797 15.8335 10.0013 15.8335C11.5979 15.8378 13.1603 15.3711 14.493 14.4918M1.66797 1.66675L18.3346 18.3334'
          className='stroke-secondary'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_3143_1196'>
          <rect width='20' height='20' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
  const eyeOpen = (
    <svg
      v-if="props.name == 'eyeOpen'"
      width='24'
      height='24'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1.66602 9.99984C1.66602 9.99984 4.16602 4.1665 9.99935 4.1665C15.8327 4.1665 18.3327 9.99984 18.3327 9.99984C18.3327 9.99984 15.8327 15.8332 9.99935 15.8332C4.16602 15.8332 1.66602 9.99984 1.66602 9.99984Z'
        className='stroke-secondary'
        strokeWidth='1.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.99935 12.4998C11.3801 12.4998 12.4993 11.3805 12.4993 9.99984C12.4993 8.61913 11.3801 7.49984 9.99935 7.49984C8.61864 7.49984 7.49935 8.61913 7.49935 9.99984C7.49935 11.3805 8.61864 12.4998 9.99935 12.4998Z'
        className='stroke-secondary'
        strokeWidth='1.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
  return (
    <div>
      <label id={`${props.id}_label`} htmlFor={customId} className='relative'>
        <p className='loginInputLabel'>{label}</p>
        <input
          className='loginInput border-primaryBorder focus:border-searchBackground'
          {...props}
          type={isTypePassword ? "password" : "text"}
        />
        {props.name == "password" && (
          <div className='absolute right-4 top-[37px]'>
            <figure onClick={setPasswordType}>
              {isTypePassword ? eyeClose : eyeOpen}
            </figure>
          </div>
        )}
      </label>
    </div>
  );
}
