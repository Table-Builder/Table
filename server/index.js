const app = require('./server');
const PORT = process.env.PORT || 3000;
const syncAndSeed = require('./db/seed/seed');
const syncAndSeedKacper = require('./db/seed/seedKacper');
const syncAndSeedKevin = require('./db/seed/seedKevin');
const syncAndSeedUser = require('./db/seed/seedUser');

const init = async () => {
    await syncAndSeed();
    await syncAndSeedKacper();
    await syncAndSeedKevin();
    await syncAndSeedUser();

    app.listen(PORT, () => console.log(`server started on port: ${PORT}`));
};

init();
