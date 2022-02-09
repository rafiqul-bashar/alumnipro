const User = require('../models/User')
const router = require('express').Router()



//Slash Directory
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.log(err.message)
    res.status(500).json(err.message);
  }
});

//get a use
router.get("/:email", async (req, res) => {
  const email = req.params.email;
  try {
    const users = await User.findOne({ email });
    res.status(200).json(users);
  } catch (err) {
    console.log(err.message)
    res.status(500).json(err.message);
  }
});

// new user
router.post("/", async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
    console.log(savedUser);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

//Create Or  Update Existing  User

router.put("/:email", async (req, res) => {
  try {
    const email = req.params.email;
    const user = await User.findOneAndUpdate({ email } ,
      {
        $set: req.body,
      },
      { upsert: true, returnDocument: "after" }
    );
    res.status(200).json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err.message);
  }
});

module.exports = router