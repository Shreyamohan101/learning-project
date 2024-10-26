require('dotenv').config();

const mongoose = require("mongoose");

const url = process.env.URL;

const connectDB = async () => {
  const connection = mongoose.connection.readyState;   //This line of code assigns the current connection state of a MongoDB database to a constant variable named connection.

  if (connection === 1) {
    console.log("Already connected");
    return;
  } else if (connection === 2) {
    console.log("Connecting");
    return
  }

  try {
    await mongoose.connect(url, {                        //1stly connect DB to Mongoose
      dbName: "DevTinder",
      bufferCommands: false,
    });
    console.log("Connected");
  } catch (error) {
    console.error("Could not connectDB to MongoDB:", error);
    throw new Error("Could not connectDB");
  }
};

module.exports = connectDB;


