import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom'

const Product = (props) => {
    return (
        <>
            <Link className="product" to={`/products/${props._id}`}>
                <img className="product-image" src={props.imgURL} alt={props.name} />
                <div className="product-brand">{props.brand}</div>
                <div className="product-name">{props.name}</div>
                <div className="product-scoville">{props.scoville} SHU</div>
                <div className="price">{`$${props.price}.00`}</div>
            </Link>
        </>
    )
}

export default Product