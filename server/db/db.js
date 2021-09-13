const Sequelize = require('sequelize');

const db = new Sequelize(
    process.env.DATABASE_URL || 'postgres://localhost/table_builder'
);

module.exports = db;
