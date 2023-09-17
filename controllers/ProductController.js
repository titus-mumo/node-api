const Product = require('../models/ProductModel')
const asyncHandler = require('express-async-handler')

const getProducts = asyncHandler( async(req, res)=>{
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

const getProductByID =  asyncHandler(async(req, res)=>{
    try {
        const { id } = req.params;
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

const postProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
}

const updateProduct = async(req, res)=>{
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body)
        if (!product) {
            return res.status(404).json({message:  `Cannot find product with the id ${id}`})
        }
        const updatedproduct = await Product.findById(id)
        res.status(200).json(updatedproduct)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({message: `Cannot find product with theid ${id}`})
        }
        res.status(200).json(product)
    } catch (error) {
        error.status(500).json({message: error.message})
    }
}

module.exports = {
    getProducts,
    getProductByID,
    postProduct,
    updateProduct,
    deleteProduct
}