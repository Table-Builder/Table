const notebookRouter = require('express').Router();
const { Notebook, Table, Note } = require('../db/index');

notebookRouter.get('/', async (req, res, next) => {
    try {
        const notebooks = await Notebook.findAll({
            include: [
                {
                    model: Note,
                },
            ],
        });
        res.send(notebooks);
    } catch (error) {
        console.log('error in notebooks router: ', error);
        next(error);
    }
});

notebookRouter.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const notebook = await Notebook.findOne({
            wehre: {
                id: id,
            },
            include: [
                {
                    model: Table,
                },
            ],
        });
        res.send(notebook);
    } catch (error) {
        console.log('error in single notebook router: ', error);
        next(error);
    }
});

module.exports = notebookRouter;
