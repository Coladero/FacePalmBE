const router = require("express").Router();
const isAuthed = require("../middleware/isAuthed")


router.get("/", (req, res, next) => {
  res.json("All good in here");
});

//*Auth routes para usuarios

const authRoutes = require("./auth.routes")
router.use("/auth", authRoutes)

//*next route
const footballApiRoutes = require("./api.routes")
router.use("/football-api", footballApiRoutes)

const playersModifyRoutes = require("./players.routes")
router.use("/players", playersModifyRoutes)

const profileRoutes = require("./profile.routes")
router.use("/Profile", profileRoutes)

const chatRoutes = require("./chat.routes")
router.use("/chat", chatRoutes)

module.exports = router;
