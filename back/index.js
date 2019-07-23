const express = require('express');

const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const cors = require('cors');
const connection = require('./conf');

app.use(cors());


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.get('/', (request, response) => {
  response.send('Bienvenue sur Express');
});

app.get('/Gallery', (req, res) => {
  connection.query('SELECT url from images', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des images');
    } else {
      res.json(results);
    }
  });
});

app.get('/Tickets', (req, res) => {
  connection.query('SELECT DATE_FORMAT(date, "%d/%m/%Y") AS date, places from tickets;', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des données');
    } else {
      res.json(results);
    }
  });
});

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});
