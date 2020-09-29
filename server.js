        //*HEROKU */
//      git add -A
//      git commit -m "Add Heroku"
//      git push heroku feature/MVP:master
//* to open HEROKU "heroku open" | https://mighty-mountain-26923.herokuapp.com/api/animals */
// # You can use the `-y` flag to skip the package questionnaire and leave default answers
// npm init -y
// # You can use `npm i` as a shortcut for `npm install`
// npm i express
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const { animals } = require('./data/animals.json');
const express = require("express");
const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path');
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true })); //takes incoming POST data and converts it to key/value pairings that can be accessed in the req.body object
// parse incoming JSON data
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//SHOULD BE AT THE END OF CODE, 3001 is localport//
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});