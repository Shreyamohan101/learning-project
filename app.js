const express = require('express');
const connectDB = require('./database.js');
const app = express();
const User = require('./src/model/user.js');
const bcrypt = require('bcrypt');
const { validateSignUpData } = require('./utils/validation');
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
    try{
        // validate the user
        validateSignUpData(req);
        
        const {FirstName, LastName, email,age, password} = req.body;

        //encrypt the password
        
        const hashedPassword = await bcrypt.hash(password, 12);
        console.log(hashedPassword);

        //creating new instance of user model
        const user = new User({FirstName, LastName, email,age, password: hashedPassword});
        

        await user.save();
        res.send("User added successfully");
    }
    catch(err){
        res.status(400).send(err.message);
    }
    
});
//login post api
app.post('/login', async (req, res) => {
    const {email, password} = req.body;
    try{
        const user = User.findOne({email:email});
        if(!user) {
            return res.status(400).send("Invalid username or password");
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch)
        {
            return res.status(400).send("Invalid Credentials");
        }
        else
        {
            res.send("Login Successful");
        }

    }
    catch(err){
        res.status(400).send(err.message);
    }
});
// delete userbyid
 app.delete('/user',async (req, res) => {
    const userid = req.body.userid;
    try{
        await User.findByIdAndDelete(userid);
        res.send("User deleted successfully");
    }
    catch(err){
        res.status(400).send(err);
    }
    
});

// update user by id
 app.put('/user',async (req, res) => {
    const userid = req.body.userid;
    const data = req.body;

    try{
        const Allowed_fields = ["age", "password", "bio"];
        const UpdateAllowed = Object.keys(data).every(k=>Allowed_fields.includes(k));
  
        if(!UpdateAllowed)
        {
            throw new Error("You cannot update this field")

        }
    

            const updatedUser = await User.findByIdAndUpdate(userid,data,{new:true});
          
               
            
            res.send(updatedUser);


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
    

   