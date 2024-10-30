const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: true
  },
  LastName : {
    type: String
  },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim : true
    },
    age: {
        type: Number,
        required: true
    },
    bio: {
        type: String
    },
   
},
{
    timestamps: true,
    versionKey: false  // this will prevent creation of __v field in the MongoDB collection
}
);

const User = mongoose.model('UserModel', UserSchema);

module.exports = User;
