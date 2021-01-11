const { Router } = require('express')
const controllers = require('../controllers/products')
const restrict = require('../helpers/restrict')

const router = Router()

// Generate list of items in the cart
router.post('/', controllers.getCart)

// Checkout route for signed in users
router.get('/pay', controllers.getPayment)