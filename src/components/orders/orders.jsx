import { Outlet } from "react-router-dom";
import UnderlineTabs from "../tabs/underlineTabs";
const tabs = [
  { name: "Open", key: "open" },
  { name: "Executed", key: "executed" },
  // { name: "Option Chain", key: "oc" },
];
export default function Orders() {
  const activeTab = "open";
  const changeActiveTab = () => {};
  return (
    <div>
      <div className='mt-2'>
        <UnderlineTabs
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={changeActiveTab}
          customClass={"min-w-[150px] max-w-auto"}
        />
      </div>
      <Outlet />
    </div>
  );
}
