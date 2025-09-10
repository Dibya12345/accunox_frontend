import "./normalwidget.scss";
const NormalWidget = ({title, content}) => {
  return (
    <>
      <div className="normal_graph_widget">
        <div className="widget_content">
          <div>{title}</div>
          <p>
            {content}
          </p>
        </div>
      </div>
    </>
  );
};

export default NormalWidget;
