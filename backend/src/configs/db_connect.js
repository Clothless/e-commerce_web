const dotenv = require('dotenv').config();
const connection = {
  db: {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
    connectTimeout: 60000,
  },
  listPerPage: 10
};


module.exports = connection;


