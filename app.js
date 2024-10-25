const express = require('express');
const connectDB = require('./database.js');
const app = express();

connectDB()
.then(()=> {
    console.log('Connected to MongoDB');
    app.listen(3000,() => {
        console.log('Server is running on port 3000');
   
        
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    });
    
});

