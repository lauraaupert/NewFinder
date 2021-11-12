const router = require("express").Router();
// const gameRoutes = require("./games");
const authRoutes = require("./authRoutes.js");
const userRoutes = require('./userRoutes.js')
// Book routes
// router.use("/api/games", gameRoutes);
router.use(authRoutes)
router.use(userRoutes)
module.exports = router;