const express = require("express");
const app = express();
const { PORT } = require("./PORT.json");

const { generateJoke } = require("./API");

app.get("/", (req, res) => {
  res.send("Joke API");
});

app.get("/api", (req, res) => {
  res.send("REQUESTS: /api/joke");
});

app.get("/api/joke", (req, res) => {
  res.send(generateJoke());
});

//404 route
app.use(function (req, res) {
  res.status(404);
  res.send("404 | Page not found!");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
