const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: true
  },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    bio: {
        type: String
    }
})

const User = mongoose.model('UserModel', UserSchema);

module.exports = User;