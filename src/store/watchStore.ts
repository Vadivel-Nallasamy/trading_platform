import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  activePrimaryTab: "discover",
  activeSecondaryTab: "",
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
  },
});
export const { setActivePrimaryTab, setActiveSecondaryTab } =
  watchSlice.actions;
export default watchSlice.reducer;
