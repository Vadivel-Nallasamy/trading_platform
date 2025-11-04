export default function UnderlineTabs({ tabs, activeTab, setActiveTab }) {
  return (
    <div className='flex h-9 border-b border-primaryBorder '>
      {tabs.map((el) => {
        let active =
          el.key === activeTab
            ? "text-primaryText font-medium border-b-[2px] border-primaryButton "
            : "text-secondary ";
        return (
          <button
            onClick={() => setActiveTab(el.key)}
            className={active + "text-sm flex-1 cursor-pointer"}
            key={el.name}
          >
            {el.name}
          </button>
        );
      })}
    </div>
  );
}
