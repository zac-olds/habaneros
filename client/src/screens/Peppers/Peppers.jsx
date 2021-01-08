// COMPONENTS
import Layout from "../../components/shared/Layout/Layout";

// SLIDER
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import CoreStyles from "react-awesome-slider/dist/styles.css";
import AnimationStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";
import "./Peppers.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Peppers = (props) => {
  return (
    <Layout user={props.user}>
      <div className="pepper-container">
        {/* <AutoplaySlider
          animation="foldOutAnimation"
          cssModule={[CoreStyles, AnimationStyles]}
          // fillParent={true}
          play={true}
          bullets={false}
          cancelOnInteraction={false}
          interval={9000}
        >
          <div>
            <div className="pepper-1" />
          </div>
          <div>
            <div className="pepper-2" />
          </div>
          <div>
            <div className="pepper-3" />
          </div>
          <div>
            <div className="pepper-4" />
          </div>
          <div>
            <div className="pepper-5" />
          </div>
          <div>
            <div className="pepper-6" />
          </div>
        </AutoplaySlider> */}
      </div>
    </Layout>
  );
};

export default Peppers;
