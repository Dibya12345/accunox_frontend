import React from "react";
import { Plus, Package } from "lucide-react";
import "./nowigetsfonund.scss";

const NoWidgetsFound = ({ sectionTitle }) => {
  return (
    <div className="no-widgets-container">
      <div className="no-widgets-content">
        <div className="empty-icon">
          <Package size={32} />
        </div>

        <div className="empty-text">
          <h3>No widgets found</h3>
          <p>
            We couldn’t find any widgets in <strong>{sectionTitle}</strong>. Try
            adjusting your search or filters to see more results.
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default NoWidgetsFound;
