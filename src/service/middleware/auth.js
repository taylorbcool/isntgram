// auth.js
const jwt = require('jsonwebtoken');

function authenticateJWT(req, res, next) {
  // Gather jwt from request header
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  if(token == null) return res.sendStatus(401);
  
  return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    req.user = user;
    return next();
  });
};

function generateToken(username, roles = null) {
  // Expires after an hour
  return jwt.sign(
    { username: `${username}`, roles: `${roles}` },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: '1h' },
  );
}

module.exports = { authenticateJWT, generateToken };
