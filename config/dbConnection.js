const mongoose = require("mongoose");
const dbConnection = () => {
  mongoose
    // using mongoose.conect() method to connect the database
    // using  mongoose cloud database
    .connect(
      "mongodb+srv://darsan:123456d@cluster0.ac3q66d.mongodb.net/product",
    )
    .then(() => {
      console.log("connected to server");
    })
    .catch(() => {
      console.log("not connected");
      return "not connected";
    });
};

module.exports = dbConnection;
