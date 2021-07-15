const express = require('express');
const index = express();

const dotenv = require('dotenv');

dotenv.config({ path:"./config/config.env" });

require('./database/connection');

index.use(express.json());

index.use(require('./router/CREATE/registration'));
index.use(require('./router/READ/login'));
index.use(require('./router/UPDATE/update'));
index.use(require('./router/UPDATE/trelloUpdate'));
index.use(require('./router/DELETE/delete'))
index.use(require('./router/READ/Profile'));
index.use(require('./router/READ/Local'));

const port = process.env.PORT;

index.listen( port , () => {
    console.log('listing the port 8000');
});


//API
//get - read
//post - create
//put - update
//delete - delete