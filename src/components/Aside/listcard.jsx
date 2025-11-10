import stockDown from "../../assets/watch/stockDown.png";
import formatter from "../../utils/formatter";
export default function ListCard({ scripData }) {
  const marketTheme = scripData.ltp > 0 ? stockDown : stockDown;
  return (
    //       <section className='absolute z-[100] w-full   scale-100 opacity-100 group-hover:scale-x-110 group-hover:scale-y-150 group-hover:opacity-100 transition-all duration-300 group-hover:shadow-y-xl  h-[65px] px-4 py-3 grid grid-cols-24 border-b border-secondaryBackground last:border-b-0'>
    <section className='h-[65px] px-4 py-3 grid grid-cols-24 border-b border-secondaryBackground last:border-b-0'>
      <div className='col-span-14'>
        <h1 className='text-sm font-normal text-primaryText leading-relaxed'>
          {scripData.tradingSymbol}
        </h1>
        <p className='text-secondary text-xs font-normal'>
          {scripData.exchange}
        </p>
      </div>
      <div className='col-span-10 flex items-center'>
        <figure className='flex-1 min-w-0'>
          <img src={marketTheme} alert={"marketTheme"} />
        </figure>
        <div className='flex-1 min-w-0'>
          <h1 className='text-sm font-normal text-primaryText leading-relaxed text-right'>
            {formatter.ruppesFormat(scripData.ltp, false, false)}
          </h1>
          <p
            className={
              Number(scripData.chg) > 0
                ? "text-positive"
                : "text-negative" + " text-xs font-normal text-right"
            }
          >
            <span>
              {formatter.ruppesFormat(scripData.chg, false, false)}
              <span className='pl-1'>
                ({formatter.ruppesFormat(scripData.pchg, false, false)}%)
              </span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
