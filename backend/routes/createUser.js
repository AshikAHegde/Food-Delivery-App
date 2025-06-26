const userModel = require('../models/user')
const express = require('express');
const router = express.Router();


router.post('/createuser', (req, res) => {
    try{
        userModel.create
    }
    catch(error){

    }
})
module.exports = router;

