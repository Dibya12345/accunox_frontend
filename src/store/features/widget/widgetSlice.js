import { createSlice } from "@reduxjs/toolkit";
import { initialDashboardConfig } from "../../../utils";

const initialState = {
  value: initialDashboardConfig,
};

export const widgetSlice = createSlice({
  name: "widget",
  initialState,
  reducers: {
    addWidget: (state, action) => {},
    removeWidget: (state, action) => {},
    updateWidget: (state, action) => {},
    deleteWidget: (state, action) => {},
    resetDashboard: (state) => {
      state.value = initialDashboardConfig;
    },
  },
});

export const {
  addWidget,
  removeWidget,
  updateWidget,
  deleteWidget,
  resetDashboard,
} = widgetSlice.actions;

export default widgetSlice.reducer;
