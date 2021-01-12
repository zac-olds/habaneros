// COMPONENTS
import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import {useState} from "react";
import Popup from "../../components/PopupScoville/Popup";
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
import CoreStyles from "react-awesome-slider/dist/styles.css";
import AnimationStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";

const Home = (props) => {
  const pepper = <FontAwesomeIcon icon={faPepperHot} />;
  const bottle = <FontAwesomeIcon icon={faWineBottle} />;
  const flame = <FontAwesomeIcon icon={faFireAlt} />;

  const [showPopup, setShowPopup] = useState(false);

  const onClickHandler = () => {
    setShowPopup(!showPopup);
  };

  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <Layout user={props.user}>
      <div className="home">
        <AutoplaySlider
          animation="foldOutAnimation"
          cssModule={[CoreStyles, AnimationStyles]}
          fillParent={true}
          play={true}
          bullets={false}
          cancelOnInteraction={false}
          interval={9000}
        >
          <div>
            <div className="image-1">
              <div className="image-filter" />
            </div>
          </div>
          <div>
            <div className="image-2">
              <div className="image-filter" />
            </div>
          </div>
          <div>
            <div className="image-3">
              <div className="image-filter" />
            </div>
          </div>
          <div>
            <div className="image-4">
              <div className="image-filter" />
            </div>
          </div>
          <div>
            <div className="image-5">
              <div className="image-filter" />
            </div>
          </div>
          <div>
            <div className="image-6">
              <div className="image-filter" />
            </div>
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
          <Link to="/">
            <div className="fa-flame" onClick={onClickHandler}>
              {flame}
              <p className="flame-text">SCOVILLE SCALE</p>
              <div className="popup">
                {showPopup ? (
                  <Popup
                    img="https://i.imgur.com/7lw0Fg5.jpg"
                    text="Scoville Scale"
                    closePopup={onClickHandler}
                  />
                ) : null}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
