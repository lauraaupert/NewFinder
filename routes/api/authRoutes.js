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
    console.log("Hello", req.body, req.user.hasMaps)
    res.json(req.user);
    // console.log(res.json(req.user))
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  router.post("/signup", function(req, res) {
    console.log(req.body)
    User.create(req.body)
      .then(user => {
          console.log(res.json(user.hasMaps))
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

  // router.put("/user_data"), function(req,res) {
  //   console.log(req.body, "yougotit")
  //   User.findOneAndUpdate(res.data._id, req.body)
  //   .then(console.log(req.data))
  // }
  router.route("/user_data").put(function(req, res) {
    console.log("yoyou", req.body.maps, req.body.markers, req.body.comment)
    if (req.body.maps === undefined && req.body.comment === undefined) {
      // let map = maps[req.body.markers.index]
      User.updateOne({_id: req.body._id}, 
        // { _id: res.data._id },
        // { $set: {map1: req.body.maps }},
        { $addToSet: {markers: req.body.markers }}, 
        function(err, result) {
          if (err) {
            res.send(err);
          } else {
            res.send(result);
          }
        })
        // .then(user => console.log(res.json(user)))
    } else if (req.body.markers === undefined && req.body.comment === undefined) {
    // if (req.body.maps) 
    User.updateOne({_id: req.body._id}, 
      // { _id: res.data._id },
      // { $set: {map1: req.body.maps }},
      { $addToSet: {maps: req.body.maps }, 
        $pull: {availableStyles: req.body.mapToDelete},
        $set: {hasMaps: true }},
      function(err, result) {
        if (err) {
          res.send(err);
        } else {
          console.log(result, "response")
          res.send(result);
        }
      }
    )
    // .then(user => console.log(res.json(user), "user"))
    }  else if (req.body.markers === undefined && req.body.maps === undefined) {
      // if (req.body.maps) 
      User.updateOne({_id: req.body._id}, 
        // { _id: res.data._id },
        // { $set: {map1: req.body.maps }},
        { $addToSet: {comment: req.body.comment }},
        function(err, result) {
          if (err) {
            res.send(err);
          } else {
            console.log(result, "response")
            res.send(result);
          }
        }
      )
      // .then(user => console.log(res.json(user), "user"))
      };
  
  });

  // Route for getting some data about our user to be used client side
  router.get("/user_data", function(req, res) {
    console.log(req.user, "userData")
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
        name: req.user.name,
        hasMaps: req.user.hasMaps,
        email: req.user.email,
        success: true,
        maps: req.user.maps,
        password: req.user.password,
        markers: req.user.markers,
        availableStyles: req.user.availableStyles,
        comment: req.user.comment
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