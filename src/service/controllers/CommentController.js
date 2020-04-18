const { Comment } = require('../schemas/CommentSchema');
const { User } = require('../schemas/UserSchema');

const validateComment = (comment) => {
    // Validate that the comment isn't empty
    if(!comment.body) return false;
    
    // Validate that the user exists
    User.count({ _id: comment.author}, (err, count) => {
        if(count > 0){
            return false;
        }
    });

    return true;
}

exports.save_comment = async (req, res, next) => {
    var comment = new Comment({
        author: req.body.author,
        body: req.body.body
    });

    if(!validateComment(comment)){
        res.status(400);
        res.json({
            'message':'all required fields must be presenet'
        });

        return res;
    }

    await comment.save((err, comment) => {
        if(err) return next(err);
        console.log("no errors");
    });

    return comment;
}