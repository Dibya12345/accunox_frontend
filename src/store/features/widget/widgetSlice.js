import { createSlice } from "@reduxjs/toolkit";
import { initialDashboardConfig } from "../../../utils";

const initialState = {
  value: initialDashboardConfig,
};

export const widgetSlice = createSlice({
  name: "widget",
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const newWidget = action.payload;
      console.log("New widget: " + JSON.stringify(newWidget, null, 2));
      state.value = {
        ...state.value,
        categories: state.value.categories.map((category) =>
          category.id === newWidget.id
            ? {
                ...category,
                widgets: [...category.widgets, newWidget],
              }
            : category
        ),
      };
    },
    removeWidget: (state, action) => {},
    updateWidget: (state, action) => {},
    deleteWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;

      state.value.categories = state.value.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            widgets: category.widgets.filter(
              (widget) => widget.widget_id !== widgetId
            ),
          };
        }
        return category;
      });
    },

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
