const router = require("express").Router();
const isAuthed = require("../middleware/isAuthed")
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

//*Auth routes para usuarios

const authRoutes = require("./auth.routes")
router.use("/auth", authRoutes)

//*next route


module.exports = router;
