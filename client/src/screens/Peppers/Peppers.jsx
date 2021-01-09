// COMPONENTS
import Layout from "../../components/shared/Layout/Layout";
import Pepper from "../../components/Pepper/Pepper";
import "./Peppers.css";

const Peppers = (props) => {
  return (
    <Layout user={props.user}>
      <div className="pepper-container">
        <Pepper />
        <Pepper />
        <Pepper />
        <Pepper />
        <Pepper />
        <Pepper />
      </div>
    </Layout>
  );
};

export default Peppers;
