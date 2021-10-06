const noteRouter = require('express').Router();
const { Note } = require('../db/index');

noteRouter.get('/', async (req, res, next) => {
    try {
        const notes = await Note.findAll();
        res.send(notes);
    } catch (error) {
        console.log('error in notes router: ', error);
        next(error);
    }
});

noteRouter.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const note = await Note.findByPk(id);
        res.send(note);
    } catch (error) {
        console.log();
        next(next);
    }
});

module.exports = noteRouter;
