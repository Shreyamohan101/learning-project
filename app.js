const express = require('express');
const connectDB = require('./database.js');
const app = express();
const User = require('./src/model/user.js');

app.use(express.json());// 1.)this helps to convert the json data to java script object or readable format; As json is not readable for server...
                        // 2.) why use not a particular get/post/put....bcoz use will work for all amd we want it for all routes to work.


 // GET /1 user
 app.get('/user',async(req,res)=>
{
    const email = req.body.email;
    try{
        const user = await User.find({email: email});
        res.send(user);
    }
    catch(err){
        res.status(400).send(err);
    }
    
});                      
app.post('/signup',async (req, res) => {
     const user = new User(req.body);
    //({
    //     FirstName: 'shreya',
    //     password: 19283,
    //     email: 'shreya@gmail.com',
    //     age: 20,
    //     bio: 'backend developer'
    // });
    try{
        await user.save();
        res.send("User added successfully");
    }
    catch(err){
        res.status(400).send(err);
    }
    
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
    