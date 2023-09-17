require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/ProductModel')
const app = express()

const MONGO_URL = process.env.MONGO_URL  
const port = process.env.PORT

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Almost there boy! Keep moving')
})

app.get('/products ', async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
        console.log(error.message)
    }
})

app.post('/products', async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        console.log(error .message)
    }
})
mongoose.set('strictQuery', false)

mongoose
    .connect(MONGO_URL)
    .then(() => {
        console.log('Connected to MongoDB')
        app.listen(port, () => {
            console.log(`Node API is running on PORT ${port}`)
        })
    }).catch((error) => {
        console.log(error.message)
    })
