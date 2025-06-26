const express = require('express')
const mongodb_Connect = require('./db')
const app = express()
const port = 5000

mongodb_Connect()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
