const faker = require('faker');
const { Notebook, Table, Note } = require('../index');

const syncAndSeedKevin = async () => {
    try {
        // ------------Sample Notebooks------------
        const kevinNotebooks = [
            Notebook.create({
                name: 'Job Search',
                userId: 2,
            }),
            Notebook.create({
                name: 'Game Statistics',
                userId: 2,
            }),
        ];

        await Promise.all(kevinNotebooks);
        // ------------Sample Tables------------
        const kevinTables = [
            Table.create({
                tableName: 'Applied',
                notebookId: 3,
            }),
            Table.create({
                tableName: 'Interviewing',
                notebookId: 3,
            }),
            Table.create({
                tableName: 'Rejected',
                notebookId: 3,
            }),
            Table.create({
                tableName: 'Accepted',
                notebookId: 3,
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
