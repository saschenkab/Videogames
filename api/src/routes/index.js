const { Router } = require("express");
const router = Router();

const gamesRouter = require("./videogames");
const genresRouter = require("./genres");
const createVideogameRouter = require("./createVideogame");

router.use("/videogames", gamesRouter);
router.use("/genres", genresRouter);
router.use("/createVideogame", createVideogameRouter);

module.exports = router;
