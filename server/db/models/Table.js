const { STRING } = require('sequelize');
const db = require('../db');

const Table = db.define('table', {
    tableName: {
        type: STRING,
    },
});

module.exports = Table;
