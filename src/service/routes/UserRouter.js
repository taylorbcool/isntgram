// UserRouter.js
const {
    user_create_post,
    user_get,
    user_list
} = require('../controllers/UserController');

const express = require('express');
const UserRouter = express.Router();

/**
 * @swagger
 * 
 * /user:
 *      get:
 *          responses:
 *              "200":
 *                  application/json:  
 */
UserRouter.get('/', user_list);

/**
 * @swagger
 * 
 * /user/test:
 *      get:
 *          responses:
 *              "200":
 *                  application/json:
 */
UserRouter.get('/test', async(req, res) => {
    res.json({ message: 'User route is up!'});
})

/**
 * @swagger
 * 
 * /user/{_id}:
 *      get:
 *          parameters:
 *              - in: path
 *                name: _id
 *                schema:
 *                    type: string
 *                required: true
 *                description: Id of the user
 *          responses:
 *              "200":
 *                  application/json:
 */
UserRouter.get('/:id', user_get);
UserRouter.post('/', user_create_post);

module.exports = UserRouter;