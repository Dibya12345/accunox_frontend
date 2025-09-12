import "./normalwidget.scss";
import { X } from "lucide-react";
const NormalWidget = ({ title, content, onClose }) => {
  return (
    <div className="normal_graph_widget">
      <div className="widget_content">
        <div>
          {title}
          <span onClick={onClose}>
            <X />
          </span>
        </div>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default NormalWidget;
