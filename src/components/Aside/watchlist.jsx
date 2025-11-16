import { useEffect, useMemo } from "react";
import HighlightTabs from "../tabs/highlightTabs";
import ListCard from "./listcard";

import {
  useGetPredefinedList,
  useGetWatchlist,
} from "../../tanstackDataManager/watchData";
import { useDispatch, useSelector } from "react-redux";

import {
  handleAllWatchlistData,
  handlePredefinedData,
  setActivePredefinedTab,
  setActiveSecondaryTab,
  setActiveUserdefinedTab,
} from "../../store/watchStore";
export default function Watchlist() {
  const predefinedTabs = useSelector((state) => state.watch.predefinedTabs);
  const activePrimaryTab = useSelector((state) => state.watch.activePrimaryTab);
  const activePredefinedTab = useSelector(
    (state) => state.watch.activePredefinedTab
  );
  const activeUserdefinedTab = useSelector(
    (state) => state.watch.activeUserdefinedTab
  );
  const activeList = useSelector((state) => state.watch.activeList);
  const activeSecondaryTab = useSelector(
    (state) => state.watch.activeSecondaryTab
  );
  console.log("rerender");
  const scrollTab = (element) => {
    const scrollElement = document.getElementById(
      `${element.name}_highlight_button`
    );
    if (scrollElement) {
      scrollElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  };

  const handleSecondaryClick = (element) => {
    scrollTab(element);
    if (activePrimaryTab == "discover") {
      dispatch(setActivePredefinedTab(element.key));
    } else {
      dispatch(setActiveUserdefinedTab(element.key));
    }
    dispatch(setActiveSecondaryTab(element.key));
  };
  const userdefinedTabs = useSelector((state) => state.watch.userdefinedTabs);
  const dispatch = useDispatch();
  const { isSuccess, data } = useGetWatchlist();

  const {
    isSuccess: isPredefinedSuccess,
    data: predefinedData,
    refetch: predefinedRefetch,
  } = useGetPredefinedList();

  useEffect(() => {
    predefinedRefetch();
  }, []);
  const subTabs = useMemo(() => {
    if (activePrimaryTab == "discover") {
      return predefinedTabs;
    } else {
      return userdefinedTabs;
    }
  }, [activePrimaryTab, predefinedTabs, userdefinedTabs]);

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(handleAllWatchlistData(data));
    }
  }, [isSuccess, data, dispatch]);
  useEffect(() => {
    if (isPredefinedSuccess) {
      dispatch(handlePredefinedData(predefinedData));
    }
  }, [isPredefinedSuccess, predefinedData, dispatch]);
  useEffect(() => {
    let element = {
      name: "",
    };
    if (activePrimaryTab == "discover") {
      element = predefinedTabs.find((el) => el.key == activePredefinedTab);
    } else {
      element = userdefinedTabs.find((el) => el.key == activeUserdefinedTab);
    }
    if (element) {
      scrollTab(element);
    }
  }, [
    activeUserdefinedTab,
    activePredefinedTab,
    activePrimaryTab,
    userdefinedTabs,
    predefinedTabs,
  ]);
  return (
    <div className='flex-1 min-h-0 flex flex-col'>
      <h1 className='mx-4 text-sm text-primaryText font-medium pt-2'>
        Recommended for you
      </h1>
      <div className='mx-4 mt-3 mb-2'>
        <HighlightTabs
          tabs={subTabs}
          activeTab={activeSecondaryTab}
          setActiveTab={handleSecondaryClick}
        />
      </div>
      <div className='flex-1 min-h-0 mb-[60px]'>
        <div className='h-full overflow-auto scroll-container'>
          {activeList?.map((el) => {
            return (
              <ListCard key={`${el.token}|${el.exchange}`} scripData={el} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
