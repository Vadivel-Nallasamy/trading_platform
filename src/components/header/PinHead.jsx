const pinHeadData = [
  {
    scripName: "NIFTY BANK",
    ltp: "48,671",
    chg: "1220.66",
    pchg: "0.01",
  },
  {
    scripName: "NIFTY BANK",
    ltp: "48,671",
    chg: "1220.66",
    pchg: "0.01",
  },
];

export default function PinHead() {
  return (
    <section>
      <ul className='flex gap-2'>
        {pinHeadData.map((pin, index) => (
          <li key={index} className='w-[176px]'>
            <div className='text-[14px] secondaryColor'>{pin.scripName}</div>
            <div className='text-xs flex flex-nowrap gap-3 '>
              {pin.ltp}
              {(() => {
                const colorClass =
                  Number(pin.pchg) > 0 ? "positiveColor" : "negativeColor";
                return (
                  <p className={colorClass}>
                    {pin.chg} ({pin.pchg}%)
                  </p>
                );
              })()}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
