import React from "react";
import "./PopUp.scss";

const PopUp = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h1>Title:</h1>
        <p>This is the pop-up content.</p>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default PopUp;
