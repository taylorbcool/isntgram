// mongoose.js
var mg = require('mongoose');

// Schemas
var { postSchema } = require('../schemas/PostSchema');
var { commentSchema } = require('../schemas/CommentSchema');
var { userSchema } = require('../schemas/UserSchema');

// connect to mongo
mg.connect('mongodb://localhost/isntgram', {useNewUrlParser: true, useUnifiedTopology: true});

// open the db
var db = mg.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('mongodb connected');
});

module.exports = { mg };