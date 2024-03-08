const session = require('express-session');
const MySqlStore = require('express-mysql-session')(session);
const dotenv = require('dotenv');

dotenv.config(
    {
        path: '../.env'
    }
);



const options = {
    createDatabaseTable: true,
    host: process.env.HOST,
    port: process.env.DB_PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME
    };


const sessionStore = new MySqlStore(options);


module.exports = sessionStore;