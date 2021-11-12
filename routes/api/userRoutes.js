var User = require("../../models/user.js");
const router = require("express").Router();

// Get the games from this user
router.get("/users/:id", function ({ id }, res) {
  User.findById(id).then((user) => {
    res.json(user);
  });
});

// Save the game from this user
router.put("/users/:id", function ({ params, body }, res) {
  User.findByIdAndUpdate(params.id, { $push: { maps: body } }).then((user) => {
    res.json(user);
  });
});

module.exports = router;