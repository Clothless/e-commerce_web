const session = require('express-session');
const sessionStore = require('./sessionStore.js');
const dotenv = require('dotenv');

dotenv.config(
    {
        path: '../.env'
    }
);
const ses = session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    }
})


module.exports = ses;
