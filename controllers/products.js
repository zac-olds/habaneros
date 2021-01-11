const User = require('../models/user')
const Product = require('../models/product')
const db = require('../db/connection')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getProduct = async (req, res) => {
  try {
      const { id } = req.params
      const product = await Product.findById(id)
      if (product) {
          return res.json(product)
      }
      res.status(404).json({ message: 'Product not found!' })
  } catch (error) {
      res.status(500).json({ error: error.message })
  }
}

const createProduct = async (req, res) => {
  try {
      const product = await new Product(req.body)
      await product.save()
      res.status(201).json(product)
  } catch (error) {
      console.log(error)
      res.status(500).json({ error: error.message })
  }
}

const updateProduct = async (req, res) => {
  const { id } = req.params
  await Product.findByIdAndUpdate(id, req.body, { new: true }, (error, product) => {
      if (error) {
          return res.status(500).json({ error: error.message })
      }
      if (!product) {
          return res.status(404).json({ message: 'Product not found!' })
      }
      res.status(200).json(product)
  })
}

const deleteProduct = async (req, res) => {
  try {
      const { id } = req.params;
      const deleted = await Product.findByIdAndDelete(id)
      if (deleted) {
          return res.status(200).send("Product deleted")
      }
      throw new Error("Product not found")
  } catch (error) {
      res.status(500).json({ error: error.message })
  }
}

// Cart controllers
// const getCart = async (req, res) => {
//   try {
//     // iterate user.products. For each product ID find the product and push it into the cart array
//     // return the array of products
//     let products = [], id = null; // setting up empty variables
//     let cart = JSON.parse(req.body.cart); // converts the JSON request recieved by the server into an object and sets it equal to the cart variable
//     if (!cart) return res.json(products); // if the cart is empty, return products
//     for (let i = 0; i < data.products.length; i++) {
//       id = products[i].id.toString(); // converts the product at index i to a string
//       if (cart.hasOwnProperty(id)) { // The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).
//         products[i].qty = cart[id];
//         products.push(products[i]);
//       }
//     }
//     return res.json(products);
//   } catch (error) {
//     res.status(400).json({ error: error.message })
//   }
// }

// Checkout controller
// const getPayment = async (req, res) => {
//   try {
//     return res.json('Payment Successful')
//   } catch (error) {
//     res.status(402).json({ error: error.message })
//   }
// }

const addProductToUser = async (req, res) => {
  // get the user PUT
  console.log("username: ", req.params.username
  )
  const user = await User.find({username: req.params.username})
  // push the existing product id into user.products array
  const product = req.body
  if (user) {
    console.log("user: ", user)
    console.log("Products in cart:", user.products)
    if (user.products) {
      console.log("--2ND IF STATEMENT--")
      user.products.push([
        ...user.products,
        product._id
      ]);
    } else {
      console.log("--ELSE STATEMENT --")
      user.products = [product._id]
    }
    await User.findByIdAndUpdate(user._id, user, { new: true }, (error, user) => {
      if (error) {
          return res.status(500).json({ error: error.message })
      }
      if (!user) {
          return res.status(404).json({ message: 'User not found!' })
      }
      res.status(200).json(user)
  })
    console.log("after added user: ", user)
  }
  // return true
  // res.json(true)
}

// const addProductToUser = async (req, res) => {
//   const { id } = req.params
//   console.log("req.params: ", req.params)
//   console.log("req.body: ", req.body)
//   await User.findByIdAndUpdate(id, req.body._id, { new: true }, {useFindAndModify: false}, (error) => {
//     console.log("Products:", user.products)
//     if (user.products) {
//       user.products.push({
//         ...user.products,
//         [req.body._id]: value
//         });
//     } else {
//       user.products = [req.body._id]
//     }
//     if (error) {
//       return res.status(500).json({ error: error.message })
//     }
//   })
//   res.json(true)
// }

module.exports = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  addProductToUser
}