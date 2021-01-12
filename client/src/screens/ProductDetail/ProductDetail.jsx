import React, {useState, useEffect} from "react";
import "./ProductDetail.css";
import Layout from "../../components/shared/Layout/Layout";
import {
  getProduct,
  deleteProduct,
  addProductToUser,
} from "../../services/products";
import {useParams, Link, useHistory} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

const ProductDetail = (props) => {
  const [product, setProduct] = useState(null);
  const [isLoaded, setLoaded] = useState(false);

  const {id} = useParams();
  const history = useHistory();

  // Font Awesome Icon
  const cart = <FontAwesomeIcon icon={faShoppingCart} />;

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
      setLoaded(true);
    };
    fetchProduct();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  // const handleChange = (event) => {
  //   event.preventDefault();
  //   setQuantity(event.target.value);
  // };

  const addToCart = async () => {
    // axios request to addProductToUsers PUT
    // /cart/user:id, product:id
    const resp = await addProductToUser(props.user.username, product);
    // if axios request is successful call history.push to redirect to shopping
    if (resp.data) {
      history.push("/products");
    }
  };

  return (
    <Layout user={props.user}>
      <div className="product-detail">
        <img
          className="product-detail-image"
          src={product.imgURL}
          alt={product.name}
        />
        <div className="detail">
          <div className="brand">{product.brand} |</div>
          <div className="name">{product.name}</div>
          <div className="price">{`$${product.price}.00`}</div>
          <div className="scoville">{product.scoville} SHU</div>
          <div className="description">{product.description}</div>
          <div className="button-container">
            <Link className="edit-link" to={`/products/${product._id}/edit`}>
              <button className="edit-button">Edit</button>
            </Link>
            <button
              className="delete-button"
              onClick={() => deleteProduct(product._id)}
            >
              Delete
            </button>
            <button className="cart-button" onClick={addToCart}>
              {cart}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
