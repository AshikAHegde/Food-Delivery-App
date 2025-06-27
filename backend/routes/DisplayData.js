const express = require('express');
const route = express.Router()

route.post('/foodData', (req, res) => {
    try {
        res.send([global.food_items,global.food_category]); // first see db.js
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = route


