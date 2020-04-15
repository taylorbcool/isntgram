// UserController.js

var { User } = require('../services/mongoose');

const validateUser = (user) => {
    if(!user.name) return false;
    if(!user.bio) return false;
    return true;
}

const user_list = (req, res, next) => {
    User.find({}, 'username')
        .exec((err, list_users) => {
            if(err) return next(err);

            // Success
            res.json(list_users);
        });
};

const user_get = (req, res, next) => {
    User.findById(req.params.id)
        .exec((err, user) => {
            if(err) next(err);

            // success
            res.json(user);
        });
}


const user_create_post = (req, res, next) => {
    var user = new User({
        name: req.body.name,
        bio: req.body.bio
    });

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

module.exports = { user_list, user_get, user_create_post };