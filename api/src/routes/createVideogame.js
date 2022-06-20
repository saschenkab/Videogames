const { Router } = require("express");
const { Videogame, Genre } = require("../database");
const { check, validationResult, checkSchema } = require("express-validator");

const createVideogame = Router();

const createVideogameSchema = {
  name: {
    isLength: {
      options: { min: 3, max: 255 },
      errorMessage: "Name must be at least 3 characters long",
    },
    matches: {
      options: /^[a-zA-Z0-9 ]+$/,
      errorMessage: "Name can only contain letters and numbers",
    },
    custom: {
      options: (value) => {
        return Videogame.findOne({
          where: {
            name: value,
          },
        }).then((videogame) => {
          if (videogame) {
            return Promise.reject("Videogame already exists");
          }
        });
      },
    },
  },
  description: {
    isLength: {
      options: { min: 10, max: 500 },
      errorMessage: "Description must be at least 10 characters long",
    },
  },
  released: {
    isDate: {
      options: { delimiter: ["-", "/"] },
      errorMessage: "Release date must be a valid date",
    },
  },
  genre: {
    isArray: {
      errorMessage: "Genres must be an array",
    },
  },
  image: {
    isURL: {
      errorMessage: "Image must be a valid URL",
    },
  },
  rating: {
    isNumeric: {
      errorMessage: "Rating must be a number",
      options: { min: 0, max: 100 },
    },
  },
};

createVideogame.post(
  "/videogame",
  checkSchema(createVideogameSchema),
  async (req, res) => {
    const errors = validationResult(req);
    const { name, description, image, genre, platforms, rating, released } =
      req.body;

    let genres = await Promise.all(
      genre.map(
        async (genre) =>
          await Genre.findAll({
            where: {
              name: genre,
            },
          })
      )
    );
    console.log("🚀 ~ file: createVideogame.js ~ line 79 ~ genres", genres);
    try {
      let img =
        "https://pbs.twimg.com/profile_images/1427313736310743048/8auIbcu6_400x400.jpg";

      if (!errors.isEmpty()) {
        return res.status(422).json({ success: false, errors: errors.array() });
      } else {
        const videogame = await Videogame.create({
          name,
          description,
          released,
          rating,
          platforms,
          image: image ? image : img,
        });

        console.log(
          "🚀 ~ file: createVideogame.js ~ line 20 ~ createVideogame.post ~ genre",

          genre
        );
        await videogame.addGenres(genres.flat());
        return res
          .status(201)
          .json({ success: true, message: "Videogame created", videogame });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
);

module.exports = createVideogame;
