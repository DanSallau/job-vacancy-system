const express = require('express');
const api = express.Router();
const vacancies = require('../controllers/job');
const employers = require('../controllers/employer');

api.get('/vacancies', vacancies.getAllVacancies);
api.get('/featuredvacancies', vacancies.getFeaturedVacancies);
api.put('/updatevacancy', vacancies.updateVacancy);
api.delete('/deletevacancy/:id', vacancies.deleteVacancy);
api.get('/vacancy/:id', vacancies.getVacancyById);
api.post('/createvacancy', vacancies.createVacancy);
api.get('/search/:searchText', vacancies.filterBySearchText);
api.get('/search', vacancies.getAllVacancies);

api.post('/createemployer', employers.createEmployer);
api.get('/employers', employers.getAllEmployers);
api.get('/activeemployers', employers.getActiveEmployers);
api.delete('/deleteemployer', employers.deleteEmployer);

api.all('/api/*', function(req, res) {
  res.sendStatus(404);
  res.end();
})

module.exports = api;