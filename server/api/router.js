const router = require('express').Router();

const userRouter = require('./user');
const notebookRouter = require('./notebook');
const tableRouter = require('./table');
const noteRouter = require('./note');

router.use('/user', userRouter);
router.use('/notebook', notebookRouter);
router.use('/table', tableRouter);
router.use('/note', noteRouter);

module.exports = router;
