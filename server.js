// # You can use the `-y` flag to skip the package questionnaire and leave default answers
// npm init -y
// # You can use `npm i` as a shortcut for `npm install`
// npm i express
const { animals } = require('./data/animals.json');
const express = require("express");

const app = express();


app.get('/api/animals', (req, res) => {
    res.json(animals);
})

//SHOULD BE AT THE END OF CODE, 3001 is localport//
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});