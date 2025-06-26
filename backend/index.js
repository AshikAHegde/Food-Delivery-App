const express = require('express')
const mongodb_Connect = require('./db')
const createuser = require('./routes/createUser')
const app = express()
const port = 5000

mongodb_Connect()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', createuser)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

