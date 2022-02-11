const User = require('../models/User')
const router = require('express').Router()
const bcrypt = require("bcrypt");
//register User
// new user
router.post("/register", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            name: req.body.username,
            email: req.body.email,
            password: hashedPass,
            phone: req.body.phone,
            address: req.body.address
        });

        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});
//Login
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) { res.json({err:"No user found or wrong email"}); }
        const validated = await bcrypt.compare(req.body.password, user.password);
        !validated && res.json({err:"Wrong Password!"})
        const { password, ...others } = user._doc;
        res.status(200).json(others);

    } catch (err) {
        console.log(err.message);
        // res.status(500).json(err.message);
    }
});

module.exports = router