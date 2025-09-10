import { configureStore } from "@reduxjs/toolkit";
import widgetReducer from "./features/widget/widgetSlice";

export const store = configureStore({
  reducer: {
    widget: widgetReducer,
  },
});
