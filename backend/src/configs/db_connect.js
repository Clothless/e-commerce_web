const dotenv = require('dotenv').config();


const connection = {
  db: {
    user: process.env.USER_NAME,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    database: process.env.DB_NAME,
    connectTimeout: 60000,
  },
  listPerPage: 10
};


module.exports = connection;


