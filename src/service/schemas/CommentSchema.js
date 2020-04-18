// CommentSchema.js
const mg = require('mongoose');
const Schema = mg.Schema;
const { userSchema } = require("./UserSchema");

var commentSchema = Schema({
    author: { type: Schema.Types.ObjectId, ref: 'User'},
    likes: [{ type: Schema.Types.ObjectId, ref: 'User'}],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment'}],
    body: String
});

var Comment = mg.model('Comment', commentSchema);

module.exports = { Comment };