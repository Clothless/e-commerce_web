const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const connection = require("../services/db.js");

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
    bcrypt.compare(password, user.password, (err, res) => {
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

passport.deserializeUser(async(user, done) => {
    const results = await connection.query(`SELECT * FROM user WHERE user_id = ${user.user_id}`);
    if (!results.length) {
        return done(null, false);
    }
    return done(null, results[0]);
    }
  );

module.exports = passport;
