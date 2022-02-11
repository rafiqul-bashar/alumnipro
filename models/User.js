const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userPhoto: { type: String, required: false },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    info: { type: String, required: false },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);