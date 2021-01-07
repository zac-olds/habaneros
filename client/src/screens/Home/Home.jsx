// COMPONENTS
import React from "react";
import Layout from "../../components/shared/Layout/Layout";

// DEPENDENCIES
import {Link} from "react-router-dom";

// STYLING AND ICONS
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faPepperHot,
  faWineBottle,
  faFireAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

// SLIDER
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const Home = (props) => {
  const pepper = <FontAwesomeIcon icon={faPepperHot} />;
  const bottle = <FontAwesomeIcon icon={faWineBottle} />;
  const flame = <FontAwesomeIcon icon={faFireAlt} />;

  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <Layout user={props.user}>
      <div className="home">
        <AutoplaySlider play={true} cancelOnInteraction={false} interval={3000}>
          <div>
            <img src="https://i.imgur.com/zwu6CLI.jpg" alt="image1" />
          </div>
          <div>
            <img src="https://i.imgur.com/S0qmii9.jpg" alt="image2" />
          </div>
          <div>
            <img src="https://i.imgur.com/6B2F3Vg.jpg" alt="image3" />
          </div>
          <div>
            <img src="https://i.imgur.com/pmVwWev.jpg" alt="image4" />
          </div>
          <div>
            <img src="https://i.imgur.com/J9yq8tN.jpg" alt="image5" />
          </div>
        </AutoplaySlider>
        <div className="fa-container">
          <Link to="/products">
            <div className="fa-bottle">
              {bottle}
              <p className="bottle-text">HOT SAUCES</p>
            </div>
          </Link>
          <Link to="/peppers">
            <div className="fa-pepper">
              {pepper}
              <p className="pepper-text">PEPPER INFO</p>
            </div>
          </Link>
          <Link to="scoville">
            <div className="fa-flame">
              {flame}
              <p className="flame-text">SCOVILLE SCALE</p>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
