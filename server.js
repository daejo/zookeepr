// # You can use the `-y` flag to skip the package questionnaire and leave default answers
// npm init -y
// # You can use `npm i` as a shortcut for `npm install`
// npm i express
const { animals } = require('./data/animals.json');
const express = require("express");

const app = express();

function filterByQuery(query, animalsArray) {
    let filteredResults = animalsArray;
    if (query.diet) {
      filteredResults = filteredResults.filter(animal => animal.diet === query.diet);
    }
    if (query.species) {
      filteredResults = filteredResults.filter(animal => animal.species === query.species);
    }
    if (query.name) {
      filteredResults = filteredResults.filter(animal => animal.name === query.name);
    }
    return filteredResults;
}
  
app.get('/api/animals', (req, res) => {
    let results = animals;
    if (req.query) {
      results = filterByQuery(req.query, results);
    }
    res.json(results);
});

//SHOULD BE AT THE END OF CODE, 3001 is localport//
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});