// main.js
// add router

// BASE SETUP
require('./services/instantiateMongoose');
var express = require('express');

var app = express();
var bp = require('body-parser');

const { swaggerRouter, getSwagger } = require('./routes/swaggerRouter');
const UserRouter = require('./routes/UserRouter');
const PostRouter = require('./routes/PostRouter');

// Configure bodyparser
app.use(bp.urlencoded({extended: true}));
app.use(bp.json());

var port = process.env.PORT || 8080;

// not implemented
const notImplemented = async(req, res) => {
    res.json({ message: 'Not Implemented'});
}

// SETUP ENDPOINTS
app.use('/comment', notImplemented);
app.use('/postlike', notImplemented);
app.use('/user', UserRouter);
app.use('/post', PostRouter);
app.use('/', swaggerRouter);

app.listen(port);
console.log("NOW LISTENING ON PORT 8080");