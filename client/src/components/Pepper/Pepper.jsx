import React from "react";
import "./Pepper.css";

const Pepper = (props) => {
  return (
    <div className="pepper-container">
      <div className="pepper-box">
        <img
          className="pepper-img"
          src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/1/8/1420721282123/4484a2b0-69bd-4c21-9730-63692391fd38-1360x2040.jpeg?width=700&quality=45&auto=format&fit=max&dpr=2&s=33d6ff1714762858142f6f2c78adffe8"
          alt="Trinidad Moruga Scorpion"
        />
        <div className="pepper-info-box">
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
