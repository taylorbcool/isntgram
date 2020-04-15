// main.js
// add router

// BASE SETUP
var express = require('express');
var app = express();
var bp = require('body-parser');

// Configure bodyparser
app.use(bp.urlencoded({extended: true}));
app.use(bp.json());

var port = process.env.PORT || 8080;

// not implemented
const router = express.Router();
const notImplemented = async(req, res) => {
    res.json({ message: 'Not Implemented'});
}

// SETUP ENDPOINTS
app.use('/comment', notImplemented);
app.use('/post', notImplemented);
app.use('/postlike', notImplemented);
app.use('/user', notImplemented);

app.listen(port);
console.log("NOW LISTENING ON PORT 8080");