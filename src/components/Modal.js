import React, { useEffect } from "react";
import ReactDom from "react-dom";
import FocusLock from "react-focus-lock";

export default function Modal({ isOpen, children, onDismiss, title }) {
  useEffect(() => {
    const handleEscape = (event) => {
      const ESCAPE_KEY = 27;
      if (event.keyCode === ESCAPE_KEY) {
        onDismiss();
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onDismiss]);

  if (!isOpen) return null;
  return ReactDom.createPortal(
    <FocusLock>
      <div className="modal-overlay" onClick={onDismiss} />
      <div className="modal-body">
        <div className="header">
          <h1>{title}</h1>
          <button className="cancel" onClick={onDismiss}>
            X
          </button>
        </div>
        {children}
      </div>
    </FocusLock>,
    document.getElementById("portal")
  );
}
