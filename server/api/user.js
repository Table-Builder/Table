const userRouter = require('express').Router();
const { User } = require('../db/models/Users');

userRouter.get('/', async (req, res, next) => {
    try {
        const users = await User.findAll();
        res.send(users);
    } catch (error) {
        console.log('error in user router', error);
        next(error);
    }
});

module.exports = userRouter;
