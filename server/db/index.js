const db = require('./db');
// Import models here:
const User = require('./models/Users');
const Table = require('./models/Table');
const Note = require('./models/Note');

// Depencies go here:

Table.belongsTo(User);
User.hasMany(Table);

Note.belongsTo(Table);
Table.hasMany(Note);

module.exports = {
    User,
    Table,
    Note,
};
