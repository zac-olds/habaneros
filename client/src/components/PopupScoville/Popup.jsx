import React from 'react';
import './Popup.css';

function Popup (props) {
  
    return (
      <div>
        <div className='popup_inner'>
          <div className='popup-img' src={props.img}></div>
          <button className='popup-btn' onClick={props.closePopup}>Close Me</button>
        </div>
      </div>
    );
 
}

export default Popup;

