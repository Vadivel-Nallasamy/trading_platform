export default function HeaderText(props) {
  return (
    <div className='h-15 leading-relaxed mb-6'>
      <h1 className='text-2xl font-medium text-primaryText '>{props.label}</h1>
      <h2 className='text-base text-secondary font-normal'>{props.subText}</h2>
    </div>
  );
}
