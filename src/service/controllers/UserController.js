// UserController.js

var { User } = require('../schemas/UserSchema');

const validateUser = (user) => {
    if(!user.username) return false;
    if(!user.bio) return false;
    return true;
}

exports.user_list = (req, res, next) => {
    console.log("user_list called");
    User.find({}, 'username')
        .exec((err, list_users) => {
            if(err) return next(err);

            // Success
            res.json(list_users);
        });
};

exports.user_get = (req, res, next) => {
    User.findById(req.params.id)
        .exec((err, user) => {
            if(err) next(err);

            // success
            res.json(user);
        });
}


exports.user_create_post = (req, res, next) => {
    var user = new User({
        username: req.body.username,
        bio: req.body.bio
    });
    console.log(user);
    if(!validateUser(user)){
        res.status(400);
        res.json({
            'message':'all required fields must be present'
        });

        return res;
    }

    user.save((err) => {
        if(err) return next(err);

        res.json(user);
    }); 
}
