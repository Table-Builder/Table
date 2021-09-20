const { STRING, TEXT } = require('sequelize');
const db = require('../db');

const Note = db.define('note', {
    title: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: false,
        },
        defaultValue: 'NOTE TITLE',
    },
    note: {
        type: TEXT,
    },
});

module.exports = Note;
