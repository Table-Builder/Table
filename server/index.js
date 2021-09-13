const app = require('./server');
const PORT = process.env.PORT || 3000;
const syncAndSeed = require('./db/seed');

const init = async () => {
    await syncAndSeed();
    app.listen(PORT, () => console.log(`server started on port: ${PORT}`));
};

init();
