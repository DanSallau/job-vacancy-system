const models = require('../models');


exports.getAllVacancies = function(req, res) {
  models.Job
    .findAll()
    .then(function(collection) {
      res.status(200).json(collection);
      res.end();
    })
    .catch((err) => {
      res.status(400);
      return res.send(err);
    });
};

exports.getFeaturedVacancies = function(req, res) {
  models.Job.findAll({
    where: {
            FeaturedJob: true
        }
  })
  .then(function(collection){
    res.status(200).json(collection)
    res.end();
  })
  .catch((err) => {
    res.status(400);
    return res.end(err);
  });
}

