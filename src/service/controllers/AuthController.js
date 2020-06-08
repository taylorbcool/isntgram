// AuthController.js
const bcrypt = require('bcrypt');

const { generateToken } = require('../middleware/auth.js');
const { User } = require('../schemas/UserSchema.js');

exports.signIn = (req, res, next) => {
  // Compare password to user
  User.findOne({ username: req.body.username }, 'password salt roles', (err, user) => {
    if(err) return next(err);

    // Compare
    return bcrypt.compare(req.body.password, user.password, (compErr, compRes) => {
      if (compErr) return next(compErr);

      if(compRes) {
        return res.json({ success: true, message: generateToken(req.body.username, user.roles) });
      }

      return res.json({ success: false, message: 'invalid password' });
    });
  });
};
