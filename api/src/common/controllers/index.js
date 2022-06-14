const axios = require("axios");
const { getGames } = require("../endpoints");

const getApiGames = async () => {
  try {
    let webGames = (await axios.get(getGames)).data.results;

    webGames = webGames?.map((game) => {
      return {
        id: game.id,
        name: game.name,
        description: game.description,
        image: game.background_image,
        genres: game.genres.map((genre) => genre.name),
        platforms: game.platforms.map((platform) => platform.platform.name),
        rating: game.rating,
        released: game.released,
      };
    });

    return webGames;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getApiGames };
