const jwt = require('jsonwebtoken');

const userAuth = async(req, res,next) => {
// Read the token from req cookies
const {token} = req.cookies;
const decode = await jwt.verify(token , "Shreya@8");
// validate the token
//find the username 

};

module.exports = {
    userAuth,                    
};