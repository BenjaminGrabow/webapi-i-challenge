const express = require('express');
const server = express();
const db = require('./data/db');

server.use(express.json());

server.get('/api/users', (req, res) => {
  db.find()
    .then(data => {
      res.json({
        result: data
      })
    })
    .catch(err => {
      res.status(500).json({
        error: "There was an error while saving the user to the database"
      })
    });
});

server.get('/api/users/:id', (req, res) => {
  const { id } = req.params;

  db.findById(id)
    .then(data => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({
          message: "The user with the specified ID does not exist."
        })
      }
    })
    .catch(err => {
      res.status(500).json({
        error: "The user information could not be retrieved."
      })
    })
});

// server.delete('/api/users/:id', (req, res) => {

// });

// server.post('/api/users', (req, res) => {

// });

server.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;


  db.update(id, changes)
    .then(data => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({ message: "The user with the specified ID does not exist." })
      }
    })
    .catch(err => {
      res.status(500).json({
        error: "The user information could not be modified."
      });
    });
});

server.listen(3000, () => {
  console.log('listen on port 3000');
})