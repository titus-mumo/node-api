const express = require('express')
const {getProducts, getProductByID, postProduct,updateProduct, deleteProduct,  } = require('../controllers/ProductController')

const router = express.Router()

router.get('/products', getProducts)

router.get('/products/:id', getProductByID)

router.post('/products', postProduct)

router.put('/products/:id', updateProduct)

router.delete('/products/:id', deleteProduct)

module.exports = router;