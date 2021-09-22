const faker = require('faker');
const { Table, Note, Notebook } = require('../index');

const syncAndSeedUser = async () => {
    try {
        // ------------Sample Tables------------
        const userNotebooks = [
            Notebook.create({
                name: 'Table 1',
                userId: 3,
            }),
            Notebook.create({
                name: 'Table 2',
                userId: 3,
            }),
        ];

        await Promise.all(userNotebooks);
        // ------------Sample Tables------------
        const userTables = [
            Table.create({
                tableName: 'Applied',
                notebookId: 5,
            }),
            Table.create({
                tableName: 'Interviewing',
                notebookId: 5,
            }),
            Table.create({
                tableName: 'Rejected',
                notebookId: 5,
            }),
            Table.create({
                tableName: 'Accepter',
                notebookId: 5,
            }),
        ];

        await Promise.all(userTables);
        // ------------Sample Notes------------
        const userNotes = [
            Note.create({
                title: 'Amazon',
                note: faker.lorem.sentence(),
                tableId: 10,
            }),
            Note.create({
                title: 'BestBuys',
                note: faker.lorem.sentence(),
                tableId: 10,
            }),
            Note.create({
                title: 'Codesmith',
                note: faker.lorem.sentence(),
                tableId: 9,
            }),
            Note.create({
                title: 'Facebook',
                note: faker.lorem.sentence(),
                tableId: 11,
            }),
            Note.create({
                title: 'Google',
                note: faker.lorem.sentence(),
                tableId: 12,
            }),
        ];
        await Promise.all(userNotes);
    } catch (error) {
        console.log('error in the User seed file: ', error);
    }
};

module.exports = syncAndSeedUser;
