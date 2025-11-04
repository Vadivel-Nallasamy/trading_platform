import { useState } from "react";
import UnderlineTabs from "../tabs/underlineTabs";
import HighlightTabs from "../tabs/highlightTabs";
const tabs = [
  { name: "Discover", key: "discover" },
  { name: "Watchlist", key: "watchlist" },
  { name: "Option Chain", key: "oc" },
];
const subTabs = [
  {
    name: "Bluest of blues",
    key: "blues",
  },
  {
    name: "Undervalued companies",
    key: "undervalued",
  },

  {
    name: "Yowieee Wowiee",
    key: "wyatt",
  },
];
export default function Aside() {
  const [activeTab, setActiveTab] = useState("discover");
  const [activeSecondaryTab, setActiveSecondaryTab] = useState("blues");
  const changeActiveTab = (key) => {
    setActiveTab(key);
  };
  return (
    <aside className='w-[400px] rounded-2xl border border-primaryBorder h-screen'>
      <div className='mt-2'>
        <UnderlineTabs
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={changeActiveTab}
        />
      </div>
      <h1 className='text-sm text-primaryText font-medium pt-2'>
        Recommended for you
      </h1>
      <HighlightTabs
        tabs={subTabs}
        activeTab={activeSecondaryTab}
        setActiveTab={setActiveSecondaryTab}
      />
    </aside>
  );
}
