const dotenv = require('dotenv');

dotenv.config(
  {
    path: '../.env'
  }
);

const connection = {
  db: {
    user: process.env.USER_NAME,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    database: process.env.DB_NAME,
    connectionLimit: 40,
    connectTimeout: 60000,
  },
  listPerPage: 10
};



module.exports = connection;


