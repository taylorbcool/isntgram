// UserController.js
const bcrypt = require('bcrypt');
const { User } = require('../schemas/UserSchema');

const validateUser = (user) => {
  if (
    !user.username
    || !user.password
    || !user.email
  ) return false;
  return true;
};

exports.userList = (req, res, next) => {
  console.log('user_list called');
  User.find({}, 'username')
    .exec((err, listUsers) => {
      if (err) return next(err);

      // Success
      return res.json(listUsers);
    });
};

exports.userGet = (req, res, next) => {
  User.findById(req.params.id)
    .exec((err, user) => {
      if (err) next(err);

      // success
      res.json(user);
    });
};


exports.userCreate = (req, res, next) => {
  const user = new User({
    username: req.body.username,
    bio: req.body.bio,
    password: req.body.password,
    email: req.body.email,
  });

  console.log(user);
  if (!validateUser(user)) {
    res.status(400);
    res.json({
      message: 'all required fields must be present',
    });

    return res;
  }

  // Gen salt
  user.salt = bcrypt.genSaltSync(10);

  // Hash
  user.password = bcrypt.hashSync(user.password, user.salt);

  return user.save((err) => {
    if (err) return next(err);

    return res.json(user);
  });
};
