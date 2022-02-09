const mongoose = require('mongoose');


const PostSchema = new mongoose.Schema(
    {
    user: { type: String, required: true},
    email: { type: String, required: true},
    likes: { type: Number},
    comment: [{ body: String, date: Date,name:String }],

    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("Post", PostSchema);