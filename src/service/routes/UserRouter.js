// UserRouter.js
const {
    user_create_post,
    user_get,
    user_list
} = require('../controllers/UserController');

const express = require('express');
const UserRouter = express.Router();

UserRouter.get('/', user_list);
UserRouter.get('/test', async(req, res) => {
    res.json({ message: 'Not Implemented'});
})
UserRouter.get('/:id', user_get);
UserRouter.post('/', user_create_post);

module.exports = UserRouter;