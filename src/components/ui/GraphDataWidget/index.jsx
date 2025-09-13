import { ChartColumn, X } from "lucide-react";
import "./graphdatawidget.scss";

const GraphDataWidget = ({ name,  onClose }) => {
  return (
    <div className="graph_widget">
      <div className="widget_header">
        <span>{name}</span>
        <span className="close_icon" onClick={onClose}>
          <X />
        </span>
      </div>
      <div className="widget_content">
        <ChartColumn height={60} width={50} color="#e1e5e9" />
        <p>No Graph data available!</p>
      </div>
    </div>
  );
};

export default GraphDataWidget;
