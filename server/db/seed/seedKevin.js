const faker = require('faker');
const { Table, Note } = require('../index');

const syncAndSeedKevin = async () => {
    try {
        // ------------Sample Tables------------
        const kevinTables = [
            Table.create({
                tableName: 'Applied',
                userId: 2,
            }),
            Table.create({
                tableName: 'Interviewing',
                userId: 2,
            }),
            Table.create({
                tableName: 'Rejected',
                userId: 2,
            }),
            Table.create({
                tableName: 'Accepter',
                userId: 2,
            }),
        ];

        await Promise.all(kevinTables);
        // ------------Sample Notes------------
        const kevinNotes = [
            Note.create({
                title: 'Amazon',
                note: faker.lorem.sentence(),
                tableId: 5,
            }),
            Note.create({
                title: 'BestBuys',
                note: faker.lorem.sentence(),
                tableId: 7,
            }),
            Note.create({
                title: 'Codesmith',
                note: faker.lorem.sentence(),
                tableId: 6,
            }),
            Note.create({
                title: 'Facebook',
                note: faker.lorem.sentence(),
                tableId: 7,
            }),
            Note.create({
                title: 'Google',
                note: faker.lorem.sentence(),
                tableId: 8,
            }),
        ];
        await Promise.all(kevinNotes);
    } catch (error) {
        console.log('error occured in Kevins seed file: ', error);
    }
};

module.exports = syncAndSeedKevin;
