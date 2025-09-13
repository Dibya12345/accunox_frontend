import "./donutwidget.scss";
import Legend from "../Legend";
import { X } from "lucide-react";
import { useMemo } from "react";
import * as d3 from "d3";

const MARGIN = 30;

const DonutWidget = ({ width, height, segments, name, items, onClose }) => {
  const colors = segments.map((segment) => segment.color);
  const data = items.map((item, index) => ({
    name: item.label,
    value: segments[index]?.percentage ?? 0,
  }));

  const radius = Math.min(width, height) / 2 - MARGIN;

  const pie = useMemo(() => {
    const pieGenerator = d3.pie().value((d) => d.value);
    return pieGenerator(data);
  }, [data]);

  const arcs = useMemo(() => {
    const arcPathGenerator = d3.arc();
    return pie.map((p) =>
      arcPathGenerator({
        innerRadius: 120,
        outerRadius: radius,
        startAngle: p.startAngle,
        endAngle: p.endAngle,
      })
    );
  }, [radius, pie]);

  return (
    <div className="donut_graph_widget">
      <div className="widget_header">
        <span>{name}</span>
        <span className="close_icon" onClick={onClose}>
          <X />
        </span>
      </div>
      <div className="widget_content">
        <svg width={width} height={height} style={{ display: "inline-block" }}>
          <g transform={`translate(${width / 2}, ${height / 2})`}>
            {arcs.map((arc, i) => (
              <path key={i} d={arc} fill={colors[i % colors.length]} />
            ))}
          </g>
        </svg>
        <Legend items={items} />
      </div>
    </div>
  );
};

export default DonutWidget;
