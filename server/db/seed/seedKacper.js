const faker = require('faker');
const { Table, Note } = require('../index');

const syncAndSeedKacper = async () => {
    try {
        // ------------Sample Tables------------
        const kacperTables = [
            Table.create({
                tableName: 'Applied',
                userId: 1,
            }),
            Table.create({
                tableName: 'Interviewing',
                userId: 1,
            }),
            Table.create({
                tableName: 'Rejected',
                userId: 1,
            }),
            Table.create({
                tableName: 'Accepter',
                userId: 1,
            }),
        ];

        await Promise.all(kacperTables);
        // ------------Sample Notes------------
        const kacperNotes = [
            Note.create({
                title: 'Amazon',
                note: faker.lorem.sentence(),
                tableId: 2,
            }),
            Note.create({
                title: 'BestBuys',
                note: faker.lorem.sentence(),
                tableId: 1,
            }),
            Note.create({
                title: 'Codesmith',
                note: faker.lorem.sentence(),
                tableId: 3,
            }),
            Note.create({
                title: 'Facebook',
                note: faker.lorem.sentence(),
                tableId: 2,
            }),
            Note.create({
                title: 'Google',
                note: faker.lorem.sentence(),
                tableId: 4,
            }),
        ];
        await Promise.all(kacperNotes);
    } catch (error) {
        console.log('error in the Kacper seed file: ', error);
    }
};

module.exports = syncAndSeedKacper;
