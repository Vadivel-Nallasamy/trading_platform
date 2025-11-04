export default function HighlightTabs({ tabs, activeTab, setActiveTab }) {
  return (
    <div className='flex gap-3 overflow-auto'>
      {tabs.map((el) => {
        const active =
          el.key == activeTab
            ? "border border-primaryButton text-primaryButton bg-secondaryButton font-medium"
            : "text-secondary bg-secondaryBackground";
        return (
          <button
            onClick={() => setActiveTab(el.key)}
            className={
              active +
              " h-[30px] rounded-[20px] px-3 py-1.5 text-xs text-nowrap"
            }
            key={el.name}
          >
            {el.name}
          </button>
        );
      })}
    </div>
  );
}
