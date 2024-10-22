require('dotenv').config();

import mongoose from "mongoose";

const url = process.env.URL;

const connect = async () => {
  const connection = mongoose.connection.readyState;

  if (connection === 1) {
    console.log("Already connected");
    return;
  } else if (connection === 2) {
    console.log("Connecting");
    return;
  }

  try {
    await mongoose.connect(url, {
      dbName: "AtlasCluster",
      bufferCommands: false,
    });
    console.log("Connected");
  } catch (error) {
    console.error("Could not connect to MongoDB:", error);
    throw new Error("Could not connect");
  }
};

export default connect;


//