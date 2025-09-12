import "./normalwidget.scss";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const NormalWidget = ({ title, content, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose?.();
    }, 300);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="normal_graph_widget"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="widget_content">
            <div>
              {title}
              <span onClick={handleClose}>
                <X />
              </span>
            </div>
            <p>{content}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NormalWidget;
