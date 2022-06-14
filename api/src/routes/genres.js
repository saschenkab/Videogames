const { Router } = require("express");
const axios = require("axios");
const { getGenres } = require("../common/endpoints");
const { Genre } = require("../database");

const genres = Router();

genres.get("/", async (req, res) => {
  let json = (await axios.get(`${getGenres}`)).data.results;
  console.log("🚀 ~ file: genres.js ~ line 10 ~ genres.get ~ json", json);

  const genres = json.map((genre) => genre.name);
  console.log("🚀 ~ file: genres.js ~ line 13 ~ genres.get ~ genres", genres);

  const genresSaved = await Promise.all(
    genres.map(async (genre) => {
      return await Genre.findOrCreate({
        where: {
          name: genre,
        },
      });
    })
  );
  return res.json(genresSaved);
});

module.exports = genres;
