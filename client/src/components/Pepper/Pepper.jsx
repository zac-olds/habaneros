import React, {useState} from "react";
import "./Pepper.css";

const Pepper = (props) => {
  const [hover, setHover] = useState(false);
  return (
    <div>
      <div
        className="pepper-box"
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          style={hover ? {display: "none"} : {display: "block"}}
          className="pepper-img"
          src="https://i.imgur.com/faVG2H6.jpg"
          alt="Trinidad Moruga Scorpion"
        />
        <div
          className="pepper-info-box"
          style={hover ? {display: "block"} : {display: "none"}}
        >
          <h3>Trinidad Moruga Scorpion</h3>
          <p>2,009,231 SHUs</p>
          <p>
            The Trinidad Moruga scorpion has a tender fruit-like flavor, which
            makes it a sweet-hot combination. The pepper can be grown from seeds
            in most parts of the world. In North America, the growing season
            varies regionally from the last spring hard frost to the first fall
            hard frost. Freezing weather ends the growing season and kills the
            plant, but otherwise they are perennials which grow all year,
            slowing in colder weather.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pepper;
