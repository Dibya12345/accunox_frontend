import { Plus } from "lucide-react";
import "./addwidgetbtn.scss";

const AddWidgetBtn = ({ onClick }) => {
  return (
    <div className="widget">
      <div className="widget_header">
        <button className="widget_smallbutton" onClick={onClick}>
          <Plus size={14} />
          Add Widget
        </button>
      </div>
    </div>
  );
};

export default AddWidgetBtn;
