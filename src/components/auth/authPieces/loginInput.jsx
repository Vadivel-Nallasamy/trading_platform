export default function LoginInput({ ...props }) {
  return (
    <div>
      <label id={`${props.customId}_label`} for={props.customId}>
        <p className='loginInputLabel'>{props.label}</p>
        <input
          className='loginInput border-primaryBorder focus:border-searchBackground'
          id={props.customId}
          {...props}
        />
      </label>
    </div>
  );
}
