require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { USER, PASSWORD, HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${USER}:${PASSWORD}@${HOST}/videogames`,
  {
    logging: false,
    native: false,
  }
);

const basename = path.basename(__filename);

const models = [];

fs.readdirSync(path.join(__dirname, "./models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    models.push(require(path.join(__dirname, "./models", file)));
  });

models.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toLocaleUpperCase() + entry[0].slice(1),
  entry[1],
]);

sequelize.models = Object.fromEntries(capsEntries);

const { videogame, genre } = sequelize.models;

videogame.belongsToMany(genre, { through: "videogame_genre" });
genre.belongsToMany(videogame, { through: "videogame_genre" });

module.exports = {
  ...sequelize.models,

  connection: sequelize,
};
