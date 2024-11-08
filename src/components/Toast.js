// Toast.js
import React, { useEffect } from "react";
import "../styles/Toast.css";

const Toast = ({ message, show, duration = 3000, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  if (!show) return null;

  return <div className="toast">{message}</div>;
};

export default Toast;
