const mongoose = require('mongoose');


const NoticeSchema = new mongoose.Schema(
  {
    notice: { type: String, required: true, unique: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notice", NoticeSchema);