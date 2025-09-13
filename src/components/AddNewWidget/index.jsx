import { X } from "lucide-react";
import { initialDashboardConfig } from "../../utils";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import "./addnewwidget.scss";

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
          validateOnBlur={true}
          validateOnChange={true}
          onSubmit={(values, { resetForm }) => {
            const newWidget = {
              id: values.category,
              categoryId: values.category,
              widget_id: uuidv4(),
              name: values.name,
              text: values.text,
              hidden: false,
              type: "custom",
            };
            onAdd(newWidget);
            resetForm();
            setShowAddWidget(false);
            setAddNewWidgetModal({ name: "", text: "", category: "" });
          }}
        >
          {({ errors, touched, handleBlur, isValid }) => (
            <Form>
              <div className="form_group">
                <label htmlFor="category">Category</label>
                <Field
                  as="select"
                  name="category"
                  onBlur={handleBlur}
                  id="category"
                >
                  <option value="">Select a category</option>
                  {initialDashboardConfig.categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </Field>
                {errors.category && touched.category && (
                  <div className="error">{errors.category}</div>
                )}
              </div>

              <div className="form_group">
                <label htmlFor="name">Widget Name</label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter widget name"
                  onBlur={handleBlur}
                />
                {errors.name && touched.name && (
                  <div className="error">{errors.name}</div>
                )}
              </div>

              <div className="form_group">
                <label htmlFor="text">Widget Content</label>
                <Field
                  as="textarea"
                  name="text"
                  id="text"
                  placeholder="Enter widget content or description"
                  onBlur={handleBlur}
                />
                {errors.text && touched.text && (
                  <div className="error">{errors.text}</div>
                )}
              </div>

              <div className="button_group">
                <button
                  className="primary_btn"
                  type="button"
                  onClick={() => setShowAddWidget(false)}
                >
                  Cancel
                </button>
                <button
                  className="secondary_btn"
                  type="submit"
                  disabled={!isValid}
                >
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