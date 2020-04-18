const { Post } = require('../schemas/PostSchema');
const { User } = require('../schemas/UserSchema');
const { save_comment } = require('../controllers/CommentController');

const validatePost = (post) => {
    // validate that body isn't empty
    if(!post.body) return false;

    // validate that user exist
    User.count({ _id: post.author}, (err, count) => {
        if(count > 0){
            return false;
        }
    });

    return true;
}

exports.post_list = (req, res, next) => {
    console.log("post_list called");
    Post.find({}, 'comments')
        .populate('author')
        .exec((err, list_posts) => {
            if(err) return next(err);

            // Sucess
            res.json(list_posts);
        });
};

exports.post_get = (req, res, next) => {
    Post.findById(req.params.id)
        .populate('author')
        .populate('comments')
        .exec((err, post) => {
            if(err) return next(err);

            // Success
            res.json(post);
        });
}

exports.post_create_post = (req, res, next) => {
    var post = new Post({
        author: req.body.author,
        body: req.body.body,
        img_url: req.body.img_url
    });
    console.log(post);

    if(!validatePost(post)){
        res.status(400);
        res.json({
            'message':'all required fields must be present'
        });

        return res;
    }

    post.save((err) => {
        if(err) return next(err);

        res.json(post);
    });
}

exports.post_add_comment = async (req, res, next) => {
    console.log(req.params.id);
    var post = await Post.findById(req.params.id);
    
    // success
    console.log(post);
    // Save the comment
    var comment = await save_comment(req, res, next).then((result) => { return result; });
    console.log("comment saved");
    console.log(comment);
    console.log(post);
    post.comments.push(comment._id);
    console.log(post);

    post.save((err) => {
        if(err) return next(err);

        res.json(post);
    });
}
// Need to add likes and comments