const { Router } = require("express");
const { Videogame, Genre } = require("../database");

const createVideogame = Router();

createVideogame.post("/videogame", async (req, res) => {
  const { name, description, image, genre, platforms, rating, released } =
    req.body;

  console.log(req.body);

  if (!image) {
    var img =
      "https://pbs.twimg.com/profile_images/1427313736310743048/8auIbcu6_400x400.jpg";
  }

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

  const videogame = await Videogame.create({
    name: name.toLowerCase(),
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

  if (videogame) {
    return res.status(201).json({ message: "Videogame created", videogame });
  } else if (
    !name ||
    !description ||
    !genres ||
    !platforms ||
    !rating ||
    !released
  ) {
    return res.status(400).json({ message: "Missing parameters" });
  } else {
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = createVideogame;
