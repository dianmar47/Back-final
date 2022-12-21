const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true, trim: true },
  record: { type: Date, default: Date.now() },
});

// define model
module.exports = mongoose.model("User", userSchema);
