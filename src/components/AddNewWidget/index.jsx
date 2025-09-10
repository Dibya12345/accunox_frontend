import { X } from "lucide-react";
import { initialDashboardConfig } from "../../utils";
import "./addnewwidget.scss"
const AddNewWidget = ({setShowAddWidget}) => {
  
  return (
    <>
      <div className="add_new_widget_modal">
        <div className="modal_content">
          <div className="modal_header">
            <h2>Add New Widget</h2>
            <button onClick={() => setShowAddWidget(false)}>
              <X size={20} />
            </button>
          </div>

          <div className="form_group">
            <label>Category</label>
            <select>
              <option value="">Select a category</option>
              {initialDashboardConfig.categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form_group">
            <label>Widget Name</label>
            <input type="text" placeholder="Enter widget name" />
          </div>

          <div className="form_group">
            <label>Widget Content</label>
            <textarea placeholder="Enter widget content or description" />
          </div>

          <div className="button_group">
            <button
              className="primary_btn"
              onClick={() => setShowAddWidget(false)}
            >
              Cancel
            </button>
            <button className="secondary_btn">Add Widget</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewWidget;
