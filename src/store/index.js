import { configureStore } from "@reduxjs/toolkit";
import widgetReducer from "./features/widget/widgetSlice";

const store = configureStore({
  reducer: {
    widget: widgetReducer,
  },
});

export default store