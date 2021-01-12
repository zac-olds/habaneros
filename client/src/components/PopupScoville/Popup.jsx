import React from "react";
import "./Popup.css";

function Popup(props) {
  return (
    <div className="popup">
      <div className="popup_inner">
        {/* <p type="text" className='popup-p'>
            {props.text}</p> */}
        <img className="popup-img" src={props.img} alt="scoville-chart"></img>
        <button className="popup-btn" onClick={props.closePopup}>
          Close Me
        </button>
      </div>
    </div>
  );
}

export default Popup;
