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

model.UserModel = mongoose.model('UserModel', UserSchema)

module.exports = model.UserModel