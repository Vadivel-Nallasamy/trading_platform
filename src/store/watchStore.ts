import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  activePrimaryTab: "discover",
  activeSecondaryTab: "",
  activeSecondaryTabIndex: 0,
  userdefinedList: [],
  activeList: [],
  userdefinedTabs: [],
  predefinedTabs: [],
  predefinedList: [],
  activeUserdefinedTab: "",
  activePredefinedTab: "",
};
const watchSlice = createSlice({
  name: "watchSlice",
  initialState,
  reducers: {
    setActivePrimaryTab: (state: any, actions: any) => {
      state.activePrimaryTab = actions.payload;
    },
    setActiveSecondaryTab: (state: any, actions: any) => {
      state.activeSecondaryTab = actions.payload;

      if (state.activePrimaryTab == "discover") {
        state.activeSecondaryTabIndex = state.predefinedTabs.findIndex(
          (el: any) => state.activeSecondaryTab === el.key
        );

        state.activeList =
          state.predefinedList[state.activeSecondaryTabIndex]?.scrips;
      } else {
        state.activeSecondaryTabIndex = state.userdefinedTabs.findIndex(
          (el: any) => state.activeSecondaryTab === el.key
        );
        state.activeList =
          state.userdefinedList[state.activeSecondaryTabIndex]?.scrips;
      }
    },
    setUserdefinedList: (state: any, actions: any) => {
      state.userdefinedList = actions.payload;
      setActiveList(state.userdefinedList[0].scrips);
    },
    setActiveList: (state: any, actions: any) => {
      state.activeList = actions.payload;
    },
    setUserdefinedTabs: (state: any, actions: any) => {
      state.userdefinedTabs = actions.payload;
    },
    setPredefinedTabs: (state: any, actions: any) => {
      state.predefinedTabs = actions.payload;
    },
    setPredefinedList: (state: any, actions: any) => {
      state.predefinedList = actions.payload;
    },
    setActivePredefinedTab: (state: any, actions: any) => {
      state.activePredefinedTab = actions.payload;
    },
    setActiveUserdefinedTab: (state: any, actions: any) => {
      state.activeUserdefinedTab = actions.payload;
    },
  },
});
export const handleAllWatchlistData =
  (payload: any) => (dispatch: any, getState: any) => {
    const watchArr = payload.filter((el: any) => !el.isDefault);
    const state = getState();
    //const activeSecondaryTabIndex = state.watch.activeSecondaryTabIndex;
    // if (activeSecondaryTab == "discover") {
    // }
    dispatch(setUserdefinedList(watchArr));
    const tabs = watchArr.map((el: any) => {
      const json = {
        name: el.mwName,
        key: el.mwName.toLowerCase(),
      };
      return json;
    });
    dispatch(setUserdefinedTabs(tabs));
    // dispatch(setActiveSecondaryTab(tabs[0].key));

    // dispatch(setActiveList(watchArr[activeSecondaryTabIndex].scrips));
  };
export const handlePredefinedData =
  (payload: any) => (dispatch: any, getState: any) => {
    // const state = getState();
    const predefinedArr = payload;
    dispatch(setPredefinedList(predefinedArr));
    const tabs = predefinedArr.map((el: any) => {
      const json = {
        name: el.mwName,
        key: el.mwName.toLowerCase(),
      };
      return json;
    });
    dispatch(setPredefinedTabs(tabs));
    //dispatch(setActiveSecondaryTab(tabs[0].key));
  };
export const handlePrimaryTabChange =
  (payload: any) => (dispatch: any, getState: any) => {
    dispatch(setActivePrimaryTab(payload));
    const state = getState();
    let tab: any = "";
    if (payload == "discover") {
      tab = state.watch.activePredefinedTab;
    } else {
      tab = state.watch.activeUserdefinedTab;
    }
    dispatch(setActiveSecondaryTab(tab));
  };
export const {
  setActivePrimaryTab,
  setActiveSecondaryTab,
  setUserdefinedList,
  setActiveList,
  setUserdefinedTabs,
  setPredefinedTabs,
  setPredefinedList,
  setActivePredefinedTab,
  setActiveUserdefinedTab,
} = watchSlice.actions;
export default watchSlice.reducer;
