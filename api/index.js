const app = require("./src/app");
const { connection } = require("./src/database");

connection
  .sync({ force: false })
  .then(() => {
    app.listen(3002, () => {
      console.log("Server running on port 3002");
    });
  })
  .catch((err) => {
    console.log(err);
  });
