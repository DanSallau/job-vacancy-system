const models = require('../models');


exports.getAllVacancies = function (req, res) {
  models.Job
    .findAll({
      order: [['CreatedOn', 'DESC']]
    })
    .then(function (collection) {
      res.status(200).json(collection);
      res.end();
    })
    .catch((err) => {
      res.status(400);
      return res.send(err);
    });
};

exports.getFeaturedVacancies = function (req, res) {
  models.Job.findAll({
    where: {
      FeaturedJob: true,
      order: [['CreatedOn', 'DESC']]
    }
  })
    .then(function (collection) {
      res.status(200).json(collection)
      res.end();
    })
    .catch((err) => {
      res.status(400);
      return res.end(err);
    });
};

exports.createVacancy = function (req, res) {
  const vacancy = req.body;
  models.Job.create({
    Title: vacancy.Title,
    JobSpecification: vacancy.JobSpecification,
    JobLocation: vacancy.JobLocation,
    OfferRelocation: vacancy.OfferRelocation,
    JobTags: vacancy.JobTags,
    JobType: vacancy.JobType,
    FeaturedJob: vacancy.FeaturedJob
  })
    .then(function () {
      res.status(200).json({ success: true });
      res.end();
    })
    .catch(err => res.status(400).json(err));
};

exports.updateVacancy = function (req, res) {
  const vacancy = req.body;
  models.Job.update(
    {

      Title: vacancy.Title,
      JobSpecification: vacancy.JobSpecification,
      JobLocation: vacancy.JobLocation,
      OfferRelocation: vacancy.OfferRelocation,
      JobTags: vacancy.JobTags,
      JobType: vacancy.JobType,
      FeaturedJob: vacancy.FeaturedJob
    },
    {
      Where: {
        id: vacancy.Id
      }
    })
    .then(function (job) {
      if (job && job.id == vacancy.Id) {
        return res.status(200).json(job);
      }
    })
    .catch(err => res.status(400).json(err))
}