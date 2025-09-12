import React from "react";
import "./donutchart.scss";
import { PieChart } from "@mui/x-charts/PieChart";

const DonutChart = ({ segments, total, centerLabel }) => {
  const radius = 18.915;
  let currentOffset = 0;

  return (
    <div className="donut-chart">
      <svg viewBox="0 0 42 42" className="donut-svg">
        <circle
          cx="21"
          cy="21"
          r={radius}
          fill="transparent"
          stroke="#f1f3f4"
          strokeWidth="4"
        />
        {segments.map((segment, index) => {
          const strokeDasharray = `${segment.percentage} ${
            100 - segment.percentage
          }`;
          const strokeDashoffset = -currentOffset;
          currentOffset += segment.percentage;

          return (
            <circle
              key={index}
              cx="21"
              cy="21"
              r={radius}
              fill="transparent"
              stroke={segment.color}
              strokeWidth="4"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          );
        })}
      </svg>
      <div className="donut-center">
        <span className="donut-number">{total}</span>
        <span className="donut-label">{centerLabel}</span>
      </div>
    </div>
  );
};

export default DonutChart;
