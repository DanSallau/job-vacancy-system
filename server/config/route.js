const express = require('express');
const api = express.Router();
const vacancies = require('../controllers/employer');

api.get('/api/vacancies', vacancies.getAllVacancies);

module.exports = api;