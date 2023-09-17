require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/ProductRoute')
const errorMiddleware = require('./middleware/ErrorMiddleware')
const cors = require('cors')

const MONGO_URL = process.env.MONGO_URL
const port = process.env.PORT || 3000  


// var corsOptions = {
//   origin: process.env.FRONTEND_URL,
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

const app = express()
app.use(errorMiddleware)
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('/api', productRoute)



mongoose.set('strictQuery', false)
mongoose.
    connect(MONGO_URL)
    .then(() => {
        app.listen(port, () => {
            console.log("Node API is running on port 3000")
        })
        console.log('Connect to MongoDB')
    }).catch((error) => {
        console.log(error)
    })