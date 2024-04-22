const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const connection = require("../services/db.js");
const user = require("../models/user_model");

passport.initialize();

const customFields = {
  usernameField: "email",
  passwordField: "password",
};

const verifyCallback = async (email, password, done) => {
    const results = await connection.query(`SELECT * FROM user WHERE email = '${email}'`);
    
    if (!results.length) {
        return done(null, false);
    }
    const user = results[0];
    console.log("This i s the user print:", user);
    bcrypt.compare(password, user.password, (err, res) => {
      console.log(res);
        if (res) {
        return done(null, user);
        } else {
        return done(null, false);
        }
    });
};

const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
  done(null, user.user_id);
});

passport.deserializeUser(async(id, done) => {
    const results = await connection.query(`SELECT * FROM user WHERE user_id = ${id}`);
    console.log(results);
    if (!results.length) {
        return done(null, false);
    }
    return done(null, results[0]);
    }
  );

module.exports = passport;
