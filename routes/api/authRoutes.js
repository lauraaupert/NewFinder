var User = require("../../models/user.js");
var passport = require("../../config/passport");
const router = require("express").Router();

// router.post('/login',
//   passport.authenticate('local', { successRedirect: '/MapsPage',
//                                    failureRedirect: '/login' }));
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  router.post("/login", 
   passport.authenticate("local"), 
  function(req, res) {
    console.log("Hello", req.body)
    res.json(req.user);
    console.log(res.json(req.user))
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  router.post("/signup", function(req, res) {
    console.log(req.body)
    User.create(req.body)
      .then(user => {
          console.log(res.json(user))
        res.status(200).json(user).redirect("/MapsPage")
      })
      .catch(function(err) {
          console.log(err)
        res.status(401).json(err).redirect('/login');
      });
  });

  // Route for logging user out
  router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  router.post("/user_data"), function(req,res) {
    User.findOneAndUpdate(res.data.email, req.body)
    .then(console.log(req.data))
  }

  // Route for getting some data about our user to be used client side
  router.get("/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({
          success: false
      })
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        _id: req.user._id,
        // username: req.user.username,
        email: req.user.email,
        success: true,
        maps: req.user.maps
      });
    }
  });
module.exports = router;
















// var User = require("../../models/user");
// const router = require("express").Router();

// router.post("/api/users", function(req, res) {
//     User.create(req.body)
//       .then(user => {
//         res.status(200).json(user)
//         // .redirect("/")
//       })
//       .catch(function(err) {
//           console.log(err)
//         res.status(401).json(err)
//         // .redirect('/login');
//       });
//   });

//   router.get("/api/users/aupert.laura@gmail.com", function(req, res) {
//     const email = req.params.email
//     console.log(email, "hello")
//     User.findOne({email: email}).then(user => res.json(user))
    
//       // res.json(
//       //   {
//       //     name: req.name
//       //   }
//       // )
//   });

//   // router.get("/api/user/:email"), function(req,res) {
//   //   console.log(req.data.email)
//   //   User.findOne({email: req.data.email})
//   //   .then(console.log(res.data.email))
//   // }

//   // findOne(function (err, kitten) {npm s
//   //   if (err) return handleError(err);
//   //   if (kitten) {
//   //     // doc may be null if no document matched
//   //   }

  
//   router.post("/api/user"), function(req,res) {
//     User.findOneAndUpdate(res.data.name, req.body)
//     .then(console.log(req.data))
//   }

//       // Otherwise send back the user's email and id
//       // Sending back a password, even a hashed password, isn't a good idea
//       // res.json({
//       //   _id: req.user._id,
//       //   name: req.friend.name,
//       //   email: req.friend.email,
//       //   success: true,
//       //   show: req.friend.show,
//       //   address: req.friend.address
//       // });
  


//   module.exports = router;