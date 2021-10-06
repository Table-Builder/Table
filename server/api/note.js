const noteRouter = require('express').Router();
const { Note } = require('../db/index');

noteRouter.get('/', async (req, res, next) => {
    try {
        const notes = await Note.findAll();
        console.log(notes);
    } catch (error) {
        console.log('error in notes router: ', error);
        next(error);
    }
});

module.exports = noteRouter;
