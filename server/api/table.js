const tableRouter = require('express').Router();
const { Table, Note } = require('../db/index');

tableRouter.get('/', async (req, res, next) => {
    try {
        const tables = await Table.findAll({
            include: [
                {
                    model: Note,
                },
            ],
        });
        res.send(tables);
    } catch (error) {
        console.log('error occured in table router: ', error);
        next(error);
    }
});

module.exports = tableRouter;
