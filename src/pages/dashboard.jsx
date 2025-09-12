import "./dashboard.scss";
import Header from "../components/header";
import { Plus, MoreVertical, RefreshCcw, X } from "lucide-react";
import AddWidgetBtn from "../components/ui/AddWidgetBtn";
import GraphDataWidget from "../components/ui/GraphDataWidget";
import DonutWidget from "../components/ui/DonutWidget";
import RiskAssessment from "../components/ui/RiskAssementWidget";
import AddWidgetSideBar from "../components/AddWidgetSideBar";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import NormalWidget from "../components/ui/NormalWidget";
import AddNewWidget from "../components/AddNewWidget";
import { addWidget, deleteWidget } from "../store/features/widget/widgetSlice";

const Dashboard = () => {
  const [showAddWidget, setShowAddWidget] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showAddNewWidgetModal, setShowAddNewWidgetModal] = useState(false);
  const [addNewWidgetModal, setAddNewWidgetModal] = useState({
    name: "",
    text: "",
    type: "",
  });
  const dispatch = useDispatch();
  const dashboardConfig = useSelector((state) => state.widget.value);

  const handleConfirmWidgets = (widgetsToAdd) => {
    widgetsToAdd.forEach((widget) => {
      const updatedConfig = {
        ...dashboardConfig,
        categories: dashboardConfig.categories.map((category) =>
          category.id === widget.category
            ? { ...category, widgets: [...category.widgets, widget] }
            : category
        ),
      };
      setDashboardConfig(updatedConfig);
    });

    setSelectedCategory("");
    setShowAddWidget(false);
  };

  const handleWidgetClose = (categoryId, widgetId) => {
    dispatch(deleteWidget({ categoryId, widgetId }));
  };

  return (
    <main className="dashboard_container">
      <Header />
      <section className="dashboard_content">
        {/* Dashboard Header */}
        <div className="dashboard_title">
          <h2 className="main_title">CNAPP Dashboard</h2>
          <div className="title_actions">
            <button
              onClick={() => setShowAddWidget(true)}
              className="add_widget_btn"
            >
              <Plus size={16} />
              Add Widget
            </button>
            <button className="icon_btn">
              <RefreshCcw size={16} />
            </button>
            <button className="icon_btn">
              <MoreVertical size={16} />
            </button>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="dashboard_section">
          {/* Executive Scan */}
          <h2 className="section_title">CSPM Executive Dashboard</h2>
          {/* CWPP Dashboard  */}
          <div className="widget_grid">
            {dashboardConfig.categories.length > 0 &&
              dashboardConfig.categories[0]?.widgets?.map((item) =>
                item.type === "donut-widget" ? (
                  <DonutWidget
                    key={item.widget_id}
                    segments={item.segments}
                    items={item.items}
                    onClose={() => handleWidgetClose(item.id, item.widget_id)}
                  />
                ) : (
                  <NormalWidget
                    key={item.widget_id}
                    title={item.name}
                    content={item.text}
                    onClose={() => handleWidgetClose(item.id, item.widget_id)}
                  />
                )
              )}
            <AddWidgetBtn onClick={() => setShowAddNewWidgetModal(true)} />
          </div>
          <h2 className="section_title">CWPP Dashboard</h2>
          <div className="widget_grid">
            {dashboardConfig.categories.length > 0 &&
              dashboardConfig.categories[1]?.widgets?.map((item) =>
                item.type === "empty-graph" ? (
                  <GraphDataWidget
                    key={item.widget_id}
                    onClose={() => handleWidgetClose(item.id, item.widget_id)}
                  />
                ) : (
                  <NormalWidget
                    key={item.widget_id}
                    title={item.name}
                    content={item.text}
                    onClose={() => handleWidgetClose(item.id, item.widget_id)}
                  />
                )
              )}
            <AddWidgetBtn />
          </div>
          <h2 className="section_title">Registry Scan</h2>
          <div className="widget_grid">
            {dashboardConfig.categories.length > 0 &&
              dashboardConfig.categories[2]?.widgets?.map((item) =>
                item.type === "risk-bar" ? (
                  <RiskAssessment
                    key={item.widget_id}
                    total={item.total}
                    label={item.label}
                    bars={item.bars}
                    legend={item.legend}
                    onClose={() => handleWidgetClose(item.id, item.widget_id)}
                  />
                ) : (
                  <NormalWidget
                    key={item.widget_id}
                    title={item.name}
                    content={item.text}
                    onClose={() => handleWidgetClose(item.id, item.widget_id)}
                  />
                )
              )}
            <AddWidgetBtn />
          </div>
        </div>
      </section>

      {/* Add Widget Sidebar Component */}
      <AddWidgetSideBar
        isOpen={showAddWidget}
        onClose={() => setShowAddWidget(false)}
        onConfirm={handleConfirmWidgets}
        selectedCategory={selectedCategory}
      />
      {showAddNewWidgetModal && (
        <AddNewWidget
          setShowAddWidget={setShowAddNewWidgetModal}
          addNewWidgetModal={addNewWidgetModal}
          setAddNewWidgetModal={setAddNewWidgetModal}
          onAdd={(newWidget) => {
            dispatch(addWidget(newWidget));
          }}
        />
      )}
    </main>
  );
};

export default Dashboard;
