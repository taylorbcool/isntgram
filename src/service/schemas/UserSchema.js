// UserSchema.js
const mg = require('mongoose');

const { Schema } = mg;
var userModel = Schema({
    username: {
      type: String,
      index: true,
      unique: true,
    },
    password: String, 
    salt: String,
    profile: String,
    email: {
      type: String,
      index: true,
      unique: true,
    },
    roles: [String],
});

const User = mg.model('User', userModel);


module.exports = { User };
