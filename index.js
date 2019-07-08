// implement your API here
const express = require('express');
const server = express();
// const Hub = require()

server.use(express.json());

server.get('', (req, res) => {

});

// server.get('', (req, res) => {

// });

// server.delete('', (req, res) => {

// });

// server.post('', (req, res) => {

// });

// server.put('', (req, res) => {

// });

server.listen(3000, () => {
  console.log('listen on port 3000');
})