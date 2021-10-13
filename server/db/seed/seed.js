const db = require('../db');
const { User } = require('../index');

const syncAndSeed = async () => {
    try {
        await db.sync({ force: true });

        // ------------Sample Users------------
        const sampleUsers = [
            User.create({
                userName: 'mpiech',
                password: 'Welcome123',
                email: 'mpiech@gmail.com',
                admin: true,
                id: 1,
            }),
            User.create({
                userName: 'kfless',
                password: 'Welcome456',
                email: 'kfless@gmail.com',
                admin: true,
                id: 2,
            }),
            User.create({
                userName: 'user1',
                password: 'Welcome789',
                email: 'guest@gmail.com',
                admin: false,
                id: 3,
            }),
        ];

        await Promise.all(sampleUsers);
    } catch (error) {
        console.log('error occured in seed file: ', error);
        next(error);
    }
};

module.exports = syncAndSeed;
