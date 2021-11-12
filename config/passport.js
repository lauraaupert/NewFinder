var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var User = require("../models/user");




// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy({
    usernameField: 'email',
	passwordField: 'password'
},
  // Our user will sign in using an email, rather than a "username"
  function(email, password, done) {
    console.log("I am here")
    // When a user tries to sign in this code runs
    User.findOne({ email: email }, function (err, dbUser) {
        
      if (err) {return done(err)}      // If there's no user with the given email
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect username."
        });
      }
      console.log(dbUser.password === password)
      // If there is a user with the given email, but the password the user gives us is incorrect
    //   if (!dbUser.validPassword(password)) {
        if (dbUser.password !== password) {
            console.log("wrong!")
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the user
      return done(null, dbUser);
    });
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;