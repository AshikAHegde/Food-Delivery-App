const userModel = require('../models/user')
const { body, validationResult } = require('express-validator');
const express = require('express');
const router = express.Router();

router.post('/createuser',
    [body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password', "Enter atleate 5 char").isLength({ min: 5 }),],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const { name, email, password, location } = req.body;
            let user = await userModel.create({
                name,
                email,
                password,
                location
            })
            res.status(200).json({
                success: true,
                message: "User created successfully",
                user
            })
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "User creation failed",
                error: error.message
            })
        }
    })


router.post('/loginuser',
    [body('email').isEmail(),
    body('password', "Enter atleate 5 char").isLength({ min: 5 }),],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const { email, password } = req.body;
            let user = await userModel.findOne({email})
            if (user.password === password)
                return res.status(200).json({
                    success: true,
                    message: "User Found and Logined",
                    user
                })
            else
                return res.status(400).json({
                    success: false,
                    message: "Invalid Credentials (Password)"
                })
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "User Not Found",
                error: error.message
            })
        }
    })

module.exports = router;
