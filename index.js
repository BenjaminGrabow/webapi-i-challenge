const express = require('express');
const server = express();
const db = require('./data/db.js');

server.use(express.json());

server.get('/api/users', (req, res) => {
  db.find()
  .then(data => {
    res.json(data);
  }).catch(err => {
    res.status(500).send(err);
  })
})

// server.get('/api/users/:id', (req, res) => {

// });

// server.delete('/api/users/:id', (req, res) => {

// });

// server.post('/api/users', (req, res) => {

// });

// server.put('/api/users/od', (req, res) => {

// });

server.listen(3000, () => {
  console.log('listen on port 3000');
})