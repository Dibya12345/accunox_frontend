import "./dashboard.scss";
import Header from "../components/header";
import { Plus, MoreVertical, RefreshCcw } from "lucide-react";
import AddWidgetBtn from "../components/ui/AddWidgetBtn";
import GraphDataWidget from "../components/ui/GraphDataWidget";
import DonutWidget from "../components/ui/DonutWidget";
import RiskAssessment from "../components/ui/RiskAssementWidget";

const Dashboard = () => {
  return (
    <main className="dashboard_container">
      <Header />
      <section className="dashboard_content">
        {/* Dashboard Header */}
        <div className="dashboard_title">
          <h2 className="main_title">CNAPP Dashboard</h2>
          <div className="title_actions">
            <button className="add_widget_btn">
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
            <DonutWidget
              segments={[{ percentage: 50, color: "#4285f4" }]}
              items={[
                { color: "#4285f4", label: "Connected (2)" },
                { color: "#e8eaed", label: "Not Connected (2)" },
              ]}
            />
            <DonutWidget
              segments={[
                { percentage: 17, color: "#ea4335" },
                { percentage: 7, color: "#fbbc04" },
                { percentage: 1, color: "#9aa0a6" },
                { percentage: 75, color: "#34a853" },
              ]}
              items={[
                { color: "#ea4335", label: "Failed (1689)" },
                { color: "#fbbc04", label: "Warning (681)" },
                { color: "#9aa0a6", label: "Not available (36)" },
                { color: "#34a853", label: "Passed (7253)" },
              ]}
            />
            <AddWidgetBtn />
          </div>
          <h2 className="section_title">CWPP Dashboard</h2>
          <div className="widget_grid">
            <GraphDataWidget />
            <GraphDataWidget />
            <AddWidgetBtn />
          </div>
          <h2 className="section_title">Registry Scan</h2>
          <div className="widget_grid">
            <RiskAssessment
              total={2}
              label="Total Images"
              bars={[
                { width: "50%", color: "#d93025" },
                { width: "50%", color: "#f9ab00" },
              ]}
              legend={[
                { color: "#d93025", label: "Critical (2)" },
                { color: "#f9ab00", label: "High (2)" },
              ]}
            />

            <RiskAssessment
              total={2}
              label="Total Images"
              bars={[
                { width: "50%", color: "#d93025" },
                { width: "50%", color: "#f9ab00" },
              ]}
              legend={[
                { color: "#d93025", label: "Critical (2)" },
                { color: "#f9ab00", label: "High (2)" },
              ]}
            />
            <AddWidgetBtn />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
