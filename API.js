const jokes = require("./jokes.json");

function generateJoke() {
  let chosenJoke = jokes[Math.floor(Math.random() * jokes.length)];

  return chosenJoke;
}

module.exports = { generateJoke };
