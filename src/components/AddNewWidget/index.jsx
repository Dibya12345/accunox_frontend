import { X } from "lucide-react";
import { initialDashboardConfig } from "../../utils";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid"; // <-- Import UUID generator
import "./addnewwidget.scss";

// Validation schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Widget name is required"),
  text: Yup.string().required("Widget content is required"),
  category: Yup.string().required("Category is required"),
});

const AddNewWidget = ({
  setShowAddWidget,
  addNewWidgetModal,
  setAddNewWidgetModal,
  onAdd,
}) => {
  return (
    <div className="add_new_widget_modal">
      <div className="modal_content">
        <div className="modal_header">
          <h2>Add New Widget</h2>
          <button onClick={() => setShowAddWidget(false)}>
            <X size={20} />
          </button>
        </div>

        <Formik
          initialValues={addNewWidgetModal}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            const newWidget = {
              id: values.category,
              category: values.category,
              widget_id: uuidv4(),
              name: values.name,
              text: values.text,
              type: "custom",
            };
            onAdd(newWidget);
            resetForm();
            setShowAddWidget(false);
            setAddNewWidgetModal({ name: "", text: "", category: "" });
          }}
        >
          {() => (
            <Form>
              <div className="form_group">
                <label>Category</label>
                <Field as="select" name="category">
                  <option value="">Select a category</option>
                  {initialDashboardConfig.categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="category"
                  component="div"
                  className="error"
                />
              </div>

              <div className="form_group">
                <label>Widget Name</label>
                <Field
                  type="text"
                  name="name"
                  placeholder="Enter widget name"
                />
                <ErrorMessage name="name" component="div" className="error" />
              </div>

              <div className="form_group">
                <label>Widget Content</label>
                <Field
                  as="textarea"
                  name="text"
                  placeholder="Enter widget content or description"
                />
                <ErrorMessage name="text" component="div" className="error" />
              </div>

              <div className="button_group">
                <button
                  className="primary_btn"
                  type="button"
                  onClick={() => setShowAddWidget(false)}
                >
                  Cancel
                </button>
                <button className="secondary_btn" type="submit">
                  Add Widget
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddNewWidget;
