// COMPONENTS
import Layout from "../../components/shared/Layout/Layout";
import Pepper from "../../components/Pepper/Pepper";
import {peppers} from "../../utils/peppers";
import "./Peppers.css";

const Peppers = (props) => {
  const data = peppers;
  const pepperList = data.map((pepper, index) => (
    <Pepper pepper={pepper} key={index} />
  ));
  return (
    <Layout user={props.user}>
      <div className="pepper-container">{pepperList}</div>
    </Layout>
  );
};

export default Peppers;
