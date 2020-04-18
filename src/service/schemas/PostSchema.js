// PostSchema.js
const mg = require('mongoose');
const Schema = mg.Schema;
const { userSchema } = require("./UserSchema");
const { commentSchema } = require("./CommentSchema");

var postSchema = Schema({
    author: { type: Schema.Types.ObjectId, ref: 'User'},
    likes: [{ type: Schema.Types.ObjectId, ref: 'User'}],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment'}],
    img_url: String,
    body: String
});

var Post = mg.model('Post', postSchema);

module.exports = { Post };