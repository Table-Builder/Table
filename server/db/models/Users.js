const { STRING, BOOLEAN } = require('sequelize');
const db = require('../db');

const User = db.define(
    'user',
    {
        userName: {
            type: STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: 'Anonymous Mouse',
        },
        email: {
            type: STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                isEmail: true,
            },
        },
        // adding for future admit tools
        admin: {
            type: BOOLEAN,
            defaultValue: false,
        },
    },
    { timestamp: false }
);

//for debugging:
// User.addHook('beforeSave', async () => {
//     console.log('user created!');
// });

module.exports = User;
