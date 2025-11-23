import { lazy } from "react";
import UnderlineTabs from "../tabs/underlineTabs";
import { useDispatch, useSelector } from "react-redux";
import { handlePrimaryTabChange } from "../../store/watchStore";
const Watchlist = lazy(() => import("./watchlist"));
const tabs = [
  { name: "Discover", key: "discover" },
  { name: "Watchlist", key: "watchlist" },
  // { name: "Option Chain", key: "oc" },
];

export default function Aside() {
  const activeTab = useSelector((state) => state.watch.activePrimaryTab);
  const dispatch = useDispatch();
  const changeActiveTab = (key) => {
    dispatch(handlePrimaryTabChange(key));
  };
  return (
    <aside className='w-[400px]  rounded-2xl border border-primaryBorder h-full flex flex-col'>
      <div className='mt-2'>
        <UnderlineTabs
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={changeActiveTab}
          customClass={"flex-1"}
        />
      </div>
      <Watchlist />
    </aside>
  );
}
