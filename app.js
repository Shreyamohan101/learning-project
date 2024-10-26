const express = require('express');
const connectDB = require('./database.js');
const app = express();
const User = require('./src/model/user');

app.post('/signup',async(req, res) => {
    const user = new User({
        FirstName: 'I_sam',
        password: 211212,
        email: 'Tin@gmail.com',
        age: 21,
        bio: 'dcbkcjsdjksj'
    });
    await user.save();
    res.send("User added successfully");
});

connectDB()
.then(()=> {
    console.log('Connected to MongoDB');
    app.listen(3000,() => {
        console.log('Server is running on port 3000');
   
        
    })
})
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    });
    


