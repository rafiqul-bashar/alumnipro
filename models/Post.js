const mongoose = require('mongoose');


const PostSchema = new mongoose.Schema(
    {
    userName: {type:string,, required: true}
 userEmail: { type: String, required: true },
body: { type: String, required: true},
    likes: { type: Number, default: 0},
    comment: [{ body: String, date: Date,name:String }],

    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("Post", PostSchema);