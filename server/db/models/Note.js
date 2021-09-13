const { STRING, TEXT, DATEONLY } = require('sequelize');
const db = require('../db');

const Note = db.define('note', {
    title: {
        type: STRING,
        allowNull: false,
        validate: {
            allowEmpty: false,
        },
        defaultValue: 'NOTE TITLE',
    },
    note: {
        type: TEXT,
        dateCreated: DATEONLY,
    },
    dateCreated: {},
});

module.exports = Note;
