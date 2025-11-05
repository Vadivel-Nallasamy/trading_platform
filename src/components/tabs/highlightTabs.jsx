export default function HighlightTabs({ tabs, activeTab, setActiveTab }) {
  return (
    <div className='flex gap-3 hide-scrollbar overflow-auto'>
      {tabs.map((el) => {
        const active =
          el.key == activeTab
            ? "border border-primaryButton text-primaryButton bg-secondaryButton font-medium"
            : "text-secondary bg-secondaryBackground";
        return (
          <button
            onClick={() => setActiveTab(el)}
            className={
              active +
              " h-[30px] rounded-[20px] px-3 py-1.5 text-xs text-nowrap"
            }
            id={`${el.name}_highlight_button`}
            key={el.name}
          >
            {el.name}
          </button>
        );
      })}
    </div>
  );
}
