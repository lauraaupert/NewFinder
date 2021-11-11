var Friend = require("../../models/friend");
const router = require("express").Router();

router.post("/api/friends", function(req, res) {
    Friend.create(req.body)
      .then(friend => {
        res.status(200).json(friend)
        // .redirect("/")
      })
      .catch(function(err) {
          console.log(err)
        res.status(401).json(err)
        // .redirect('/login');
      });
  });

  router.get("/api/friends", function(req, res) {
    Friend.find({}).then(friends => res.json(friends))
    
      // res.json(
      //   {
      //     name: req.name
      //   }
      // )
  });
  router.post("/api/friends"), function(req,res) {
    Friend.findOneAndUpdate(res.data.name, req.body)
    .then(console.log(req.data))
  }

      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      // res.json({
      //   _id: req.user._id,
      //   name: req.friend.name,
      //   email: req.friend.email,
      //   success: true,
      //   show: req.friend.show,
      //   address: req.friend.address
      // });
  


  module.exports = router;