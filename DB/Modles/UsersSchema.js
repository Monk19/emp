const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  password: { type: String, unique: true },
  phone: { type: Number },
  place: { type: String },
});
const User = mongoose.model("User", userSchema);

module.exports = User;
