const { Router } = require("express");
const router = Router();
const gamesRouter = require("./videogames");

router.use("/videogames", gamesRouter);

module.exports = router;
