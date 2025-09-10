import React from "react";
import "./legend.scss";

const Legend = ({ items }) => {
  const reversed = [...items].reverse();

  return (
    <div className="chart-legend">
      {reversed.map((item, index) => (
        <div key={index} className="legend-item">
          <span
            className="legend-dot"
            style={{ backgroundColor: item.color }}
          ></span>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Legend;
