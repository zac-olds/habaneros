// COMPONENTS
import Layout from "../../components/shared/Layout/Layout";

// NEW SLIDER
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Peppers.css";

const Peppers = (props) => {
  return (
    <Layout user={props.user}>
      <div className="pepper-container">
        <AliceCarousel autoPlay autoPlayInterval="3000">
          <img src="https://i.imgur.com/OanWKEp.jpg " className="sliderimg" />
          <img src="https://i.imgur.com/MXjSBHo.jpg" className="sliderimg" />
          <img src="https://i.imgur.com/GD80vQQ.jpg " className="sliderimg" />
          <img src="https://i.imgur.com/DZHIsPN.jpg" className="sliderimg" />
          <img src="https://i.imgur.com/ljp4roM.jpg" className="sliderimg" />
          <img src="https://i.imgur.com/1kfM974.jpg" className="sliderimg" />
        </AliceCarousel>
      </div>
    </Layout>
  );
};

export default Peppers;
