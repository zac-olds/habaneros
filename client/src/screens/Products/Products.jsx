import React, { useState, useEffect } from 'react'
import './Products.css'
import Product from '../../components/Product/Product'
import Layout from '../../components/shared/Layout/Layout'
import { getProducts } from '../../services/products'

const Products = (props) => {
  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts()
      setAllProducts(products)
      
    }
    fetchProducts()
  }, [])

  const productsJSX = allProducts.map((product, index) =>
    <Product
      _id={product._id}
      name={product.name}
      imgURL={product.imgURL}
      brand={product.brand}
      scoville={product.scoville}
      price={product.price}
      key={index}
    />
  )

  return (
    <Layout user={props.user}>
      <div className="products">
        {productsJSX}
      </div>
    </Layout>
  )
}


export default Products