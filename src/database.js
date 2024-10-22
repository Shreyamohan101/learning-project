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
//wwwwaaahh

// git checkout -b shreya..

// git push origin branch..

// see, there are changes that need to be pushed, but chnages maine kiye shreya mein, but push karne ka try kar rha hu main mein, to vo nhi kar rha kuch bhii..
// kyuu main mein agar hum push akre toh vo tabtak nahi hoga jabtak vo main branch current* nahi bann jaati? haan jabtak tum main per kaam nhi kar rhe tab tak vo push bhi nhi karne dega, agar push karne deta vo to log aake apni branch create karte aur kuch ulta seedha seedhe main mein push kar dete achaa okayy.. 

// why 2 tims git pull .... aisa hota hai ki, agar tumne changes kiye hai kuch aur tum pull karte ho to vo kehta hai ki bhayaaa ek baar dekh lo,kya pata mai changes le aau phir apka kiya karvaya udd jaye to aisa rokne ke liye vo kehta hai ki inko commit kar do ollaayyssss..

//pjhli aar checkout kara toh nahi hua...usne kaha ki changes hue hai firr tumne cheges add kre commit kare fir branch changes kari tohh hogyii vo kesey?..
// aisa hota hai ki branch change karne per tumhare changes git ke pas se chale jaate hai agar commit na kiya ho tumne, ye pata chalne ke liye ye dekho, modified likh ke aa rha hai na hnnnnn so jabtak ye aayega, tab tak vo branch change nhi karne dega, abhi thoda tough lag rha hoga but as you will use it it will get easyyy..
