import "./donutwidget.scss";
import { PieChart } from "@mui/x-charts/PieChart";
import Legend from "../Legend";
import DonutChart from "../DonutChart";

const DonutWidget = ({segments , items}) => {
  return (
    <>
      <div className="donut_graph_widget">
        <div>Cloud Accounts</div>
        <div className="widget_content">
          <DonutChart
            segments={segments}
            total="9659"
            centerLabel="Total"
          />
          <Legend
            items={items}
          />
        </div>
      </div>
    </>
  );
};

export default DonutWidget;
