// UserSchema.js
const mg = require('mongoose');
const Schema = mg.Schema;
var userModel = Schema({
    username: String,
    bio: String
});

var User = mg.model('User', userModel);


module.exports = { User };