const { Router } = require("express");
const { Videogame, Genre } = require("../database");
const axios = require("axios");
const { getApiGames } = require("../common/controllers");
const { getGameByName, APIKEY, getGame } = require("../common/endpoints");
const { Op } = require("sequelize");
const games = Router();

games.get("/", async (req, res) => {
  const { name } = req.query;

  if (name) {
    try {
      let gamesByName = await axios.get(`${getGameByName}${name}`);

      const apiResponse = gamesByName.data.results.map((game) => {
        return {
          id: game.id,
          name: game.name,
          genre: game.genres.map((genre) => genre.name),
          image: game.background_image,
          rating: game.rating,
        };
      });

      let databaseGames = await Videogame.findAll({
        where: {
          name: {
            [Op.iLike]: `%` + name.toLowerCase() + `%`,
          },
        },
        include: { model: Genre },
      });
      console.log(
        "🚀 ~ file: videogames.js ~ line 33 ~ games.get ~ databaseGames",
        databaseGames
      );

      databaseGames = databaseGames.map((game) => {
        return {
          id: game.id,
          name: game.name,
          genre: game.genres ? game.genres.map((genre) => genre.name) : [],
          image: game.image,
          rating: game.rating,
        };
      });
      let games = [].concat(apiResponse, databaseGames);
      if (games.length) {
        return res.json(games);
      } else {
        return res.status(404).json({ error: "No games found" });
      }
    } catch (error) {
      console.log(error);
      return res.json(error);
    }
  }
  const games = await getApiGames();
  return res.json(games);
});

games.get("/videogame/:id", async (req, res) => {
  const { id } = req.params;

  try {
    let game = (await axios.get(`${getGame}${id}${APIKEY}`)).data;

    if (Object.keys(game).length > 1) {
      return res.status(200).json({
        id: game.id,
        name: game.name,
        description: game.description,
        image: game.background_image,
        genres: game.genres.map((genre) => genre.name),
        platforms: game.platforms.map((platform) => platform.platform.name),
        rating: game.rating,
        released: game.released,
      });
    } else {
      return res.status(404).json({ message: "Game not found" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal server error" });
  }
});
module.exports = games;
