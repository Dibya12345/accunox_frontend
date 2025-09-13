import React, { useState } from "react";
import { X } from "lucide-react";
import "./addwidgetsidebar.scss";
import { useSelector } from "react-redux";

const AddWidgetSidebar = ({ isOpen, onClose, onConfirm, selectedCategory }) => {
  const [activeTab, setActiveTab] = useState("CSPM");
  const [selectedWidgets, setSelectedWidgets] = useState([]);
  const dashboardConfig = useSelector((state) => state.widget.value);

  const tabs = ["CSPM", "CWPP", "Registry"];

  const getWidgetsByCategory = (tab) => {
    switch (tab) {
      case "CSPM":
        return dashboardConfig?.categories[0]?.widgets || [];
      case "CWPP":
        return dashboardConfig?.categories[1]?.widgets || [];
      case "Registry":
        return dashboardConfig?.categories[2]?.widgets || [];
      default:
        return [];
    }
  };

  const toggleWidgetSelection = (widgetId) => {
    setSelectedWidgets((prev) =>
      prev.includes(widgetId)
        ? prev.filter((id) => id !== widgetId)
        : [...prev, widgetId]
    );
  };

  const handleConfirm = () => {
    const widgetsToAdd = selectedWidgets.map((widgetId) => {
      const widget = getWidgetsByCategory(activeTab).find(
        (w) => w.widget_id === widgetId
      );

      return widget;
    });

    onConfirm(widgetsToAdd);
    setSelectedWidgets([]);
  };

  const handleClose = () => {
    setSelectedWidgets([]);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="sidebar-overlay" onClick={handleClose}>
      <div className="sidebar" onClick={(e) => e.stopPropagation()}>
        <div className="sidebar-header">
          <button className="close-button" onClick={handleClose}>
            <X size={20} />
          </button>
          <h2 className="sidebar-title">Add Widget</h2>
          <p className="sidebar-subtitle">
            Personalize your dashboard by adding the following widget
          </p>
        </div>

        <div className="sidebar-body">
          <div className="tabs-container">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="widgets-list">
            {getWidgetsByCategory(activeTab).map((widget) => (
              <div
                key={widget.widget_id}
                className="widget-item"
                onClick={() => toggleWidgetSelection(widget.widget_id)}
              >
                <input
                  type="checkbox"
                  className="widget-checkbox"
                  checked={selectedWidgets.includes(widget.widget_id)}
                  onChange={() => toggleWidgetSelection(widget.widget_id)}
                />
                <label className="widget-label">{widget.name}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="sidebar-footer">
          <div className="button-group">
            <button className="btn btn-secondary" onClick={handleClose}>
              Cancel
            </button>
            <button
              className="btn btn-primary"
              onClick={handleConfirm}
              disabled={selectedWidgets.length === 0}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddWidgetSidebar;
