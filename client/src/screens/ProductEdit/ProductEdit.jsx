import React, {useState, useEffect} from "react";
import "./ProductEdit.css";
import {useParams, Redirect} from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import {getProduct, updateProduct} from "../../services/products";

const ProductEdit = (props) => {
  const [product, setProduct] = useState({
    name: "",
    brand: "",
    imgURL: "",
    scoville: "",
    description: "",
    price: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  let {id} = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
    };
    fetchProduct();
  }, [id]);

  const handleChange = (event) => {
    let {name, value} = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await updateProduct(id, product);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/products/${id}`} />;
  }

  return (
    <Layout user={props.user}>
      <div className="product-edit">
        <div className="imagecontainer">
          <img
            className="edit-product-image"
            src={product.imgURL}
            alt={product.name}
          />
          <form onSubmit={handleSubmit}>
            <input
              className="edit-input-image-link"
              placeholder="Image Link"
              value={product.imgURL}
              name="imgURL"
              required
              onChange={handleChange}
            />
          </form>
        </div>
        <form className="edit-form" onSubmit={handleSubmit}>
          <input
            className="edit-name"
            placeholder="Name"
            value={product.name}
            name="name"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className="edit-brand"
            placeholder="Brand"
            value={product.brand}
            name="brand"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className="edit-scoville"
            placeholder="Scoville"
            value={product.scoville}
            name="scoville"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className="edit-price"
            placeholder="Price"
            value={product.price}
            name="price"
            required
            onChange={handleChange}
          />
          <textarea
            className="edit-description"
            rows={10}
            cols={60}
            placeholder="Description"
            value={product.description}
            name="description"
            required
            onChange={handleChange}
          />
          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ProductEdit;
