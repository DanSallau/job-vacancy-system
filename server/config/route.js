const express = require('express');
const api = express.Router();
const vacancies = require('../controllers/job');

api.get('/vacancies', vacancies.getAllVacancies);
api.get('/featuredvacancies', vacancies.getFeaturedVacancies);
api.put('/updatevacancy', vacancies.updateVacancy);
api.delete('/deletevacancy/:id', vacancies.deleteVacancy);
api.get('/vacancy/:id', vacancies.getVacancyById);
api.post('/createvacancy', vacancies.createVacancy);

module.exports = api;