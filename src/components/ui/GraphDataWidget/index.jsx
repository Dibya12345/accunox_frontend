import { ChartColumn  } from "lucide-react";
import "./graphdatawidget.scss";
const GraphDataWidget = () => {
  return (
    <>
      <div className="graph_widget">
        <div>
            Hello
        </div>
        <div className="widget_content">
          <ChartColumn height={60} width={50} color="#e1e5e9" />
          <p>No Graph data available!</p>
        </div>
      </div>
    </>
  );
};

export default GraphDataWidget;
