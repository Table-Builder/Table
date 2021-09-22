const userRouter = require('express').Router();
const { User } = require('../db/index');

userRouter.get('/', async (req, res, next) => {
    try {
        const users = await User.findAll();
        res.send(users);
    } catch (error) {
        console.log('error in user router', error);
        next(error);
    }
});

userRouter.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await User.findByPk(id, {
            attributes: { exclude: ['password'] },
        });
        res.send(user);
        console.log(id);
    } catch (error) {
        console.log('error in single user router', error);
        next(error);
    }
});

module.exports = userRouter;
