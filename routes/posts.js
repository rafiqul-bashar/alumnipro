const Post = require('../models/Post')
const router = require('express').Router()
//save new post
router.post("/new", async (req, res) => {
    const newPost = new Post({
        userName: req.body.userName,
	userEmail:req.body.email,
	comment:req.body.comment,
    });
    try {
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
        console.log(savedPost);
    } catch (err) {
        res.status(500).json(err.message);
    }
});
//get all post
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    console.log(err.message)
    res.status(500).json(err.message);
  }
});
//update post
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOneAndUpdate({ id } ,
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
//delete post
router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User Has been Deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router