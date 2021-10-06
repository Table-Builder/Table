const supertest = require('supertest');
const db = require('../server/db/db');
const server = require('../server/server');
const syncAndSeed = require('../server/db/seed/seed');
const syncAndSeedKacper = require('../server/db/seed/seedKacper');
const syncAndSeedKevin = require('../server/db/seed/seedKevin');
const syncAndSeedUser = require('../server/db/seed/seedUser');

const app = supertest(server);

describe('This is a blank test', () => {
    it('1+3=4', () => {
        expect(1 + 3).toEqual(4);
    });
});

// Route tests

describe('Testing routes', () => {
    beforeEach(async () => {
        await db.sync({ force: true });
        await syncAndSeed();
        await syncAndSeedKacper();
        await syncAndSeedKevin();
        await syncAndSeedUser();
    });

    afterAll(async () => {
        await db.close();
    });

    // Users

    describe('GET /api/user', () => {
        it('expects the route to exist', async () => {
            const response = await app.get('/api/user');

            expect(response.status).toEqual(200);
            expect(response.type).toEqual('application/json');
            expect(response.res.statusMessage).toEqual('OK');
            expect(response.res.complete).toEqual(true);
        });
    });

    describe('GET /api/user/1', () => {
        it('expects the route for the user 1 to be accessible', async () => {
            const response = await app.get('/api/user/1');
            const body = response.body;

            expect(response.status).toEqual(200);
            expect(response.type).toEqual('application/json');
            expect(response.res.statusMessage).toEqual('OK');
            expect(response.res.complete).toEqual(true);
            expect(body.id).toEqual(1);
            expect(body.userName).toEqual('mpiech');
            expect(body.admin).toEqual(true);
        });
    });

    // Notebooks

    describe('GET /api/notebook', () => {
        it('expects the route to exist', async () => {
            const response = await app.get('/api/notebook');

            expect(response.status).toEqual(200);
            expect(response.type).toEqual('application/json');
            expect(response.res.statusMessage).toEqual('OK');
            expect(response.res.complete).toEqual(true);
        });
    });

    // describe('GET /api/user/1', () => {
    //     it('expects the route for the user 1 to be accessible', async () => {
    //         const response = await app.get('/api/user/1');
    //         const body = response.body;

    //         expect(response.status).toEqual(200);
    //         expect(response.type).toEqual('application/json');
    //         expect(response.res.statusMessage).toEqual('OK');
    //         expect(response.res.complete).toEqual(true);
    //         expect(body.id).toEqual(1);
    //         expect(body.userName).toEqual('mpiech');
    //         expect(body.admin).toEqual(true);
    //     });
    // });

    // Tables

    // Notes
});
