const Notice = require('../models/Notice')
const router = require('express').Router()

router.post("/new", async (req, res) => {
    const newNotice = new Notice({
        notice: req.body.notice
    });
    try {
        const savedNotice = await newNotice.save();
        res.status(201).json(savedNotice);
        console.log(savedNotice);
    } catch (err) {
        res.status(500).json(err.message);
    }
});

module.exports = router