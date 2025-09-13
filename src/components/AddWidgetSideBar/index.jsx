import React, { useState } from "react";
import { X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import "./addwidgetsidebar.scss";
import { toggleWidgetHidden } from "../../store/features/widget/widgetSlice";

const AddWidgetSidebar = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const dashboardConfig = useSelector((state) => state.widget.value);

  const tabConfig = [
    { label: "CSPM", categoryId: "cspm-executive" },
    { label: "CWPP", categoryId: "cwpp-dashboard" },
    { label: "Registry", categoryId: "registry-scan" },
  ];

  const [activeTab, setActiveTab] = useState(tabConfig[0].categoryId);

  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
    setActiveTab(tabConfig[0].categoryId);
  };

  const getWidgetsForActiveTab = () => {
    const category = dashboardConfig?.categories.find(
      (cat) => cat.id === activeTab
    );
    return category?.widgets || [];
  };

  const handleCheckboxChange = (widgetId, categoryId, checked) => {
    dispatch(toggleWidgetHidden({ widgetId, categoryId, hidden: !checked }));
  };

  const anyHiddenWidgets = dashboardConfig.categories
    .flatMap((category) => category.widgets)
    .some((widget) => widget.hidden);

  const handleConfirm = () => {

    handleClose();
  };

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
                  checked={item.hidden}
                  onChange={(e) =>
                    handleCheckboxChange(
                      item.widget_id,
                      item.categoryId,
                      e.target.checked
                    )
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
              disabled={!anyHiddenWidgets}
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
