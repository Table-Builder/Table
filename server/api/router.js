const router = require('express').Router();

const userRouter = require('./user');
const notebookRouter = require('./notebook');

router.use('/users', userRouter);
router.use('/notebooks', notebookRouter);

module.exports = router;
