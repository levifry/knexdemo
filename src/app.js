const { response } = require("express");

const express = require('express')
const app = express();
const port = 8081;

const knex = require('knex')(require('../knexfile.js')["development"])

app.get('/', (req, res) => {
  res.send('Application up and running.')
})

app.get('/pets', (req, res) => {
  knex('pet')
    .select('*')
    .then(pets => {
      var petNames = pets.map(pet => pet)
      res.json(petNames);
    })
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );

})

app.listen(port, () => {
  console.log('Your Knex and Express applications are runnning successfully.')
})