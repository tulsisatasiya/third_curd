const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstname: {
    type: String,
    trim: true,
  },
  lastname: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
  },
  age: {
    type: Number,
    trim: true,
  },
});

const user = mongoose.model("userSchema", userSchema);

module.exports = user;
