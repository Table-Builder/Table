const router = require('express').Router();

const userRouter = require('./user');
const notebookRouter = require('./notebook');
const tableRouter = require('./table');

router.use('/user', userRouter);
router.use('/notebook', notebookRouter);
router.use('/table', tableRouter);

module.exports = router;
