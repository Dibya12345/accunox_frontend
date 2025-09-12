import "./donutwidget.scss";
import Legend from "../Legend";
import DonutChart from "../DonutChart";
import { X } from "lucide-react";

const DonutWidget = ({ segments, items, onClose }) => {
  return (
    <div className="donut_graph_widget">
      <div className="widget_header">
        <span>Cloud Accounts</span>
        <span className="close_icon" onClick={onClose}>
          <X />
        </span>
      </div>
      <div className="widget_content">
        <DonutChart segments={segments} total="9659" centerLabel="Total" />
        <Legend items={items} />
      </div>
    </div>
  );
};

export default DonutWidget;
