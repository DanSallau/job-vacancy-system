const express = require('express');
const api = express.Router();


api.get('/', (req, res) => {
  res.send('api works');
});

module.exports = api;