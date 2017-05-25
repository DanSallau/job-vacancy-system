const models = require('../models');


exports.getAllVacancies = function(req, res) {
  models.Job
    .findAll()
    .then(function(collection) {
        console.log('Sgwagger  ', collection);
      res.status(200).json(collection);
    })
    .catch((err) => console.log('The error is ', err));
}