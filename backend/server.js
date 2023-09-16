const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log("Node API App is running on port 3000")
})

app.get('/', (req, res) => {
    res.send('Hello there')
})