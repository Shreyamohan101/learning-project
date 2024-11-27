const jwt = require('jsonwebtoken');

const userAuth = async(req,res,next) => {
// Read the token from req cookies
try{
const {token} = req.cookies;
if(!token)
{
    throw new Error( 'Token not valid please login' );
}
const decode = await jwt.verify(token , process.env.JWT_SECRET);
const {_id} = decodedMsg;
const user = await user.findById(_id);
if(!user)
{
    throw new Error( 'user not found' );
}
next();
}
catch(err) {
    res.status(401).send({error: 'You are not authorized to access this resource.'});
}

// validate the token
//find the username 

};

module.exports = {
    userAuth,                    
};