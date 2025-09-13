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
      state.value = {
        ...state.value,
        categories: state.value.categories.map((category) =>
          category.id === newWidget.categoryId
            ? {
                ...category,
                widgets: [...category.widgets, newWidget],
              }
            : category
        ),
      };
    },
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
    hideWidgets: (state, action) => {
      const widgetIdsToHide = action.payload;

      state.value.categories = state.value.categories.map((category) => {
        const updatedWidgets = category.widgets.map((widget) =>
          widgetIdsToHide.includes(widget.widget_id)
            ? { ...widget, hidden: true }
            : widget
        );

        return {
          ...category,
          widgets: updatedWidgets,
        };
      });
    },
    toggleWidgetHidden: (state, action) => {
      const { widgetId, categoryId } = action.payload;

      state.value.categories = state.value.categories.map((category) => {
        if (category.id === categoryId) {
          const updatedWidgets = category.widgets.map((widget) =>
            widget.widget_id === widgetId
              ? { ...widget, hidden: !widget.hidden }
              : widget
          );
          return { ...category, widgets: updatedWidgets };
        }
        return category;
      });
    },
  },
});

export const {
  addWidget,
  deleteWidget,
  resetDashboard,
  hideWidgets,
  toggleWidgetHidden,
} = widgetSlice.actions;

export default widgetSlice.reducer;
