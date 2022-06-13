const { KEY } = process.env;

const APIKEY = `?key=${KEY}`;

const getGames = `https://api.rawg.io/api/games${APIKEY}`;

const getGame = `https://api.rawg.io/api/games/`;

const getGameByName = `https://api.rawg.io/api/games${APIKEY}&search=`;

const getGenres = `https://api.rawg.io/api/genres${APIKEY}`;

module.exports = {
  APIKEY,
  getGames,
  getGame,
  getGameByName,
  getGenres,
};
