const { STRING, DATEONLY, DATE } = require('sequelize');
const db = require('../db');

const Table = db.define('table', {
    tableName: {
        type: STRING,
    },
    dateCreated: {
        type: DATEONLY,
    },
    dateUpdated: {
        type: DATE,
    },
});

module.exports = Table;
