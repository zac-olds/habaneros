import React, {useState} from "react";
import "./Pepper.css";

const Pepper = ({pepper}) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="pepper-box"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        style={hover ? {display: "none"} : {display: "block"}}
        className="pepper-img"
        src={pepper.imageURL}
        alt={pepper.name}
      />
      <div
        className="pepper-info-box"
        style={hover ? {display: "block"} : {display: "none"}}
      >
        <h3>{pepper.name}</h3>
        <p>{pepper.scoville} SHUs</p>
        <p>{pepper.description}</p>
      </div>
    </div>
  );
};

export default Pepper;
