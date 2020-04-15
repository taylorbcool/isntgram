// CommentSchema.js
const mg = require('mongoose');
const Schema = mg.Schema;
const { userSchema } = require("./UserSchema");

var commentSchema = Schema({
    _id: Schema.Types.ObjectId,
    author: { type: Schema.Types.ObjectId, ref: 'User'},
    likes: [{ type: Schema.Types.ObjectId, ref: 'User'}],
    content: String
});

module.exports = { commentSchema };