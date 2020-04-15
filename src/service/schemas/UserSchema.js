// UserSchema.js
const mg = require('mongoose');

var userModel = new mg.Schema({
    username: String,
    bio: String
});

module.exports = { userModel };