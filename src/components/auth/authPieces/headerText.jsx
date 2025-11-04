export default function HeaderText(props) {
  return (
    <div className='mb-6'>
      <div className='h-auto leading-relaxed '>
        <h1 className='text-2xl font-medium text-primaryText '>
          {props.label}
        </h1>
        <h2 className='text-base text-secondary font-normal'>
          {props.subText}
        </h2>
      </div>
    </div>
  );
}
