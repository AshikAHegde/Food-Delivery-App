const express = require('express')
const cors = require('cors')
const mongodb_Connect = require('./db')
const createuser = require('./routes/createUser')
const app = express()
const port = 5000

mongodb_Connect()
app.use(express.json());
app.use(cors());
//or
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
// });

app.use(express.urlencoded({ extended: true }));
app.use('/api', createuser)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

