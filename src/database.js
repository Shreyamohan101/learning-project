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


// git checkout -b shreya

// git push origin branch

// see, there are changes that need to be pushed, but chnages maine kiye shreya mein, but push karne ka try kar rha hu main mein, to vo nhi kar rha kuch bhii
// kyuu main mein agar hum push akre toh vo tabtak nahi hoga jabtak vo main branch current* nahi bann jaati? haan jabtak tum main per kaam nhi kar rhe tab tak vo push bhi nhi karne dega, agar push karne deta vo to log aake apni branch create karte aur kuch ulta seedha seedhe main mein push kar dete achaa okayy //let this comment be here?

// so now I've pushed my changes I can see them here, but see magic
