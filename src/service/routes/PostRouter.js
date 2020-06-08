const {
    post_create_post,
    post_get,
    post_list,
    post_add_comment
} = require('../controllers/PostController');

const express = require('express');
const PostRouter = express.Router();

/**
 * @swagger
 * 
 * /post:
 *      get:
 *          response:
 *              "200":
 *                  application/json:
 */
PostRouter.get('/', post_list);

/**
 * @swagger
 * 
 * /post/test:
 *      get:
 *          response:
 *              "200":
 *                  applicaton/json
 */
PostRouter.get('/test', async(req, res) => {
    res.json({ message: 'User router is up!'});
})

/**
 * @swagger
 * 
 * /post/{_id}:
 *      get:
 *          parameters:
 *              - in: path
 *                name: _id
 *                schema:
 *                      type: string
 *                required: true
 *                description: id of the post
 *          response:
 *              "200":
 *                  application/json:    
 */
PostRouter.get('/:id', post_get);

PostRouter.post('/', post_create_post);

PostRouter.post('/:id/comment', post_add_comment);

module.exports = PostRouter;