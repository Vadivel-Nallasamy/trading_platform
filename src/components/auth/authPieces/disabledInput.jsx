import { useSelector } from "react-redux";

export default function DisabledHeader() {
  const userId = useSelector((state) => state.auth.userId);
  return (
    <div className='h-[57px] w-full rounded-xl bg-productSwitch px-4 betweenFlex mb-6'>
      <div className='flex items-center  gap-2'>
        <div className='size-8 rounded-full text-product text-xs font-semibold border-product border-[0.8px] centerFlex '>
          ST
        </div>
        <div className='flex flex-col justify-between leading-relaxed'>
          <p className=' text-primaryText text-sm font-medium '>{userId}</p>
          <p className='text-xs font-normal text-secondary'>Sachin Tendulkar</p>
        </div>
      </div>
      <p className='text-product font-medium text-xs cursor-pointer'>Switch</p>
    </div>
  );
}
