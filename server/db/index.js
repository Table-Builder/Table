const db = require('./db');

// Import models here:
const User = require('./models/Users');
const Notebook = require('./models/Notebook');
const Table = require('./models/Table');
const Note = require('./models/Note');

// Depencies go here:

User.hasMany(Notebook);
Notebook.belongsTo(User);

Notebook.hasMany(Table);
Table.belongsTo(Notebook);

Note.belongsTo(Table);
Table.hasMany(Note);

module.exports = {
    User,
    Notebook,
    Table,
    Note,
};
