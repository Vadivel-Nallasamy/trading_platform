import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  activePrimaryTab: "discover",
  activeSecondaryTab: "",
  watchlistData: [],
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
    },
    setWatchlistData: (state: any, actions: any) => {
      state.watchlistData = actions.payload;
    },
  },
});
export const { setActivePrimaryTab, setActiveSecondaryTab, setWatchlistData } =
  watchSlice.actions;
export default watchSlice.reducer;
