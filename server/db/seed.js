const faker = require('faker');
const db = require('./db');
const User = require('./models/Users');
const Note = require('./models/Note');
const Table = require('./models/Table');

const syncAndSeed = async () => {
    try {
        await db.sync({ force: true });

        // ------------Sample Users------------
        const sampleUsers = [
            User.create({
                unserName: 'mpiech',
                password: 'Welcome123',
                email: 'mpiech@gmail.com',
                admin: true,
            }),
            User.create({
                unserName: 'kfless',
                password: 'Welcome456',
                email: 'kfless@gmail.com',
                admin: true,
            }),
            User.create({
                unserName: 'user1',
                password: 'Welcome789',
                email: 'guest@gmail.com',
                admin: false,
            }),
        ];
        // ------------Sample Tables------------

        // ------------Sample Notes------------

        await Promise.all(sampleUsers);
    } catch (error) {
        console.log('error in the seed file: ', error);
    }
};

module.exports = syncAndSeed;
