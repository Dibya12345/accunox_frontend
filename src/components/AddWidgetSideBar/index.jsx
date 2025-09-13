import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import "./addwidgetsidebar.scss";
import { deleteWidget } from "../../store/features/widget/widgetSlice";

const AddWidgetSidebar = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const dashboardConfig = useSelector((state) => state.widget.value);

  const tabConfig = [
    { label: "CSPM", categoryId: "cspm-executive" },
    { label: "CWPP", categoryId: "cwpp-dashboard" },
    { label: "Registry", categoryId: "registry-scan" },
  ];

  const [activeTab, setActiveTab] = useState(tabConfig[0].categoryId);
  const [selectedWidgets, setSelectedWidgets] = useState({});

  // Reset selected widgets when tab or sidebar opens
  useEffect(() => {
    if (isOpen) {
      const category = dashboardConfig?.categories.find(
        (cat) => cat.id === activeTab
      );
      const initialState = {};
      category?.widgets.forEach((widget) => {
        initialState[widget.widget_id] = true; // All are initially checked
      });
      setSelectedWidgets(initialState);
    }
  }, [isOpen, activeTab, dashboardConfig]);

  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
    setActiveTab(tabConfig[0].categoryId);
    setSelectedWidgets({});
  };

  const getWidgetsForActiveTab = () => {
    const category = dashboardConfig?.categories.find(
      (cat) => cat.id === activeTab
    );
    return category?.widgets || [];
  };

  const handleCheckboxChange = (widgetId, checked) => {
    setSelectedWidgets((prev) => ({
      ...prev,
      [widgetId]: checked,
    }));
  };

  const handleConfirm = () => {
    const widgetsToDelete = Object.entries(selectedWidgets)
      .filter(([_, isChecked]) => !isChecked)
      .map(([widgetId]) => widgetId);

    const currentCategory = dashboardConfig.categories.find(
      (category) => category.id === activeTab
    );

    widgetsToDelete.forEach((widgetId) => {
      dispatch(deleteWidget({ widgetId, categoryId: currentCategory.id }));
    });

    handleClose();
  };

  const hasChanges = Object.values(selectedWidgets).some((checked) => !checked);

  return (
    <div className="sidebar-overlay" onClick={handleClose}>
      <div className="sidebar" onClick={(e) => e.stopPropagation()}>
        <div className="sidebar-header">
          <button className="close-button" onClick={handleClose}>
            <X size={20} />
          </button>
          <h2 className="sidebar-title">Add Widget</h2>
          <p className="sidebar-subtitle">
            Personalize your dashboard by adding the following widgets
          </p>
        </div>

        <div className="sidebar-body">
          <div className="tabs-container">
            {tabConfig.map((tab) => (
              <button
                key={tab.categoryId}
                className={`tab ${
                  activeTab === tab.categoryId ? "active" : ""
                }`}
                onClick={() => setActiveTab(tab.categoryId)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="widgets-list">
            {getWidgetsForActiveTab().map((item) => (
              <div key={item.widget_id} className="widget-item">
                <input
                  type="checkbox"
                  className="widget-checkbox"
                  id={item.widget_id}
                  checked={selectedWidgets[item.widget_id] ?? true}
                  onChange={(e) =>
                    handleCheckboxChange(item.widget_id, e.target.checked)
                  }
                />
                <label className="widget-label" htmlFor={item.widget_id}>
                  {item.name}
                </label>
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
              disabled={!hasChanges}
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
