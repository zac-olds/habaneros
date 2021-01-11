const { Router } = require('express')
const controllers = require('../controllers/products')
const restrict = require('../helpers/restrict')

const router = Router()

// Generate list of items in the cart


// Checkout route for signed in users
// router.get('/pay', restrict, controllers.getPayment)