const { STRING } = require('sequelize');
const db = require('../db');

const Notebook = db.define('notebook', {
    name: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: false,
        },
        defaultValue: 'DEFAULT NOTEBOOK',
    },
});

module.exports = Notebook;
