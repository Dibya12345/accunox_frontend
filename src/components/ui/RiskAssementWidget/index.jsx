import "./riskassementwidget.scss";

const RiskAssementWidget = ({ total, label, bars, legend }) => {
  return (
    <div className="risk-widget-content">
      <div className="risk-assessment">
        {/* Top Number */}
        <div className="risk-number">
          <span className="risk-number-value">{total}</span>
          <span className="risk-number-label">{label}</span>
        </div>

        {/* Progress Bar */}
        <div className="risk-bar">
          {bars.map((bar, index) => (
            <div
              key={index}
              className="risk-bar-segment"
              style={{ width: bar.width, backgroundColor: bar.color }}
            ></div>
          ))}
        </div>

        {/* Legend */}
        <div className="risk-legend">
          {legend.map((item, index) => (
            <div key={index} className="legend-item">
              <span
                className="legend-dot"
                style={{ backgroundColor: item.color }}
              ></span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RiskAssementWidget;
