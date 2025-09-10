import React, { useState, useEffect } from "react";
import {
  Settings,
  MoreVertical,
  Plus,
  X,
  Search,
  Edit,
  Trash2,
} from "lucide-react";
import "./addwidgetsidebar.scss";

// Sidebar Component
const AddWidgetSidebar = ({ isOpen, onClose, onConfirm, selectedCategory }) => {
  const [activeTab, setActiveTab] = useState("CSPM");
  const [selectedWidgets, setSelectedWidgets] = useState([]);

  const tabs = ["CSPM", "CWPP", "Image", "Ticket"];

  const getWidgetsByCategory = (tab) => {
    switch (tab) {
      case "CSPM":
        return [
          {
            id: "cloud-accounts-new",
            name: "Cloud Accounts",
            category: "cspm-executive",
          },
          {
            id: "risk-assessment-new",
            name: "Cloud Account Risk Assessment",
            category: "cspm-executive",
          },
          {
            id: "security-posture",
            name: "Security Posture",
            category: "cspm-executive",
          },
          {
            id: "compliance-overview",
            name: "Compliance Overview",
            category: "cspm-executive",
          },
        ];
      case "CWPP":
        return [
          {
            id: "workload-protection",
            name: "Workload Protection Status",
            category: "cwpp-dashboard",
          },
          {
            id: "runtime-security",
            name: "Runtime Security Events",
            category: "cwpp-dashboard",
          },
          {
            id: "policy-violations",
            name: "Policy Violations",
            category: "cwpp-dashboard",
          },
        ];
      case "Image":
        return [
          {
            id: "vulnerability-scan",
            name: "Vulnerability Scan Results",
            category: "registry-scan",
          },
          {
            id: "image-compliance",
            name: "Image Compliance Score",
            category: "registry-scan",
          },
          {
            id: "malware-detection",
            name: "Malware Detection",
            category: "registry-scan",
          },
        ];
      case "Ticket":
        return [
          {
            id: "open-tickets",
            name: "Open Security Tickets",
            category: "cspm-executive",
          },
          {
            id: "ticket-trends",
            name: "Ticket Resolution Trends",
            category: "cspm-executive",
          },
          {
            id: "sla-performance",
            name: "SLA Performance",
            category: "cspm-executive",
          },
        ];
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
        (w) => w.id === widgetId
      );
      return {
        id: `${widget.id}-${Date.now()}-${Math.random()}`,
        name: widget.name,
        text: `This is a ${widget.name} widget. It provides detailed information and analytics for monitoring and managing your security infrastructure.`,
        type: "text",
        category: selectedCategory || widget.category,
      };
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
    <>
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
                  key={widget.id}
                  className="widget-item"
                  onClick={() => toggleWidgetSelection(widget.id)}
                >
                  <input
                    type="checkbox"
                    className="widget-checkbox"
                    checked={selectedWidgets.includes(widget.id)}
                    onChange={() => toggleWidgetSelection(widget.id)}
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
    </>
  );
};

export default AddWidgetSidebar