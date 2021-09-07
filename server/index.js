const app = require('./server');
const PORT = process.env.PORT || 3000;

const init = async () => {

      app.listen(PORT, () => console.log(`server started on port: ${PORT}`));
};

init();
