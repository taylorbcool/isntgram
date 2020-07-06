// UserRouter.js
const express = require('express');
const {
  userCreate,
  userGet,
  userList,
} = require('../controllers/UserController');

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
UserRouter.get('/', userList);

/**
 * @swagger
 *
 * /user/test:
 *      get:
 *          responses:
 *              "200":
 *                  application/json:
 */
UserRouter.get('/test', async (req, res) => {
  res.json({ message: 'User route is up!' });
});

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
UserRouter.get('/:id', userGet);
UserRouter.post('/', userCreate);

module.exports = UserRouter;
