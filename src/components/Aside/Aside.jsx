import { lazy, useState } from "react";
import UnderlineTabs from "../tabs/underlineTabs";
const Watchlist = lazy(() => import("./watchlist"));
const tabs = [
  { name: "Discover", key: "discover" },
  { name: "Watchlist", key: "watchlist" },
  { name: "Option Chain", key: "oc" },
];

export default function Aside() {
  const [activeTab, setActiveTab] = useState("discover");

  const changeActiveTab = (key) => {
    setActiveTab(key);
  };
  return (
    <aside className='w-[400px]  rounded-2xl border border-primaryBorder h-full flex flex-col'>
      <div className='mt-2'>
        <UnderlineTabs
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={changeActiveTab}
        />
      </div>
      <Watchlist />
    </aside>
  );
}
