import { Plus } from "lucide-react";
import "./addwidgetbtn.scss"
const AddWidgetBtn = () => {
  return (
    <>
      <div className="widget">
        <div className="widget_header">
          <button className="widget_smallbutton">
            <Plus size={14} />
            Add Widget
          </button>
        </div>
      </div>
    </>
  );
};

export default AddWidgetBtn;
