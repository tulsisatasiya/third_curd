const mongoose = require("mongoose");

const connectDB = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/thirdcurd").then(() => {
      console.log("connection success");
    })
    .catch((err) => {
      console.log(err, "error");
    });
};

module.exports = { connectDB };
