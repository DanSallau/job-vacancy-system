const models = require('../models');

exports.getAllVacancies = function(req, res) {
  models.Job
    .findAll({
      include: [{
        model: models.Employer
      }],
      order: [['CreatedOn', 'DESC']]
    })
    .then(function(collection) {
      res.status(200).json(collection);
      res.end();
    })
    .catch((err) => {
      res.status(400);
      res.end();
    });
};

exports.getFeaturedVacancies = function(req, res) {
  models.Job.findAll({
    include: [{
      model: models.Employer
    }],
    where: {
      FeaturedJob: true
    },
    order: [['CreatedOn', 'DESC']]
  })
    .then(function(collection) {
      res.status(200).json(collection)
      res.end();
    })
    .catch((err) => {
      res.status(400);
      res.end();
    });
};

exports.createVacancy = function(req, res) {
  const vacancy = req.body;

  models.Job.create({
    Title: vacancy.Title,
    JobSpecification: vacancy.JobSpecification,
    JobLocation: vacancy.JobLocation,
    OfferRelocation: vacancy.OfferRelocation,
    JobTags: vacancy.JobTags,
    JobType: vacancy.JobType,
    FeaturedJob: vacancy.FeaturedJob,
    EmployerId: vacancy.EmployerId
  })
    .then(function() {
      res.status(200).json({
        success: true
      });
      res.end();
    })
    .catch(err => res.status(400).json(err));
};

exports.filterBySearchText = function(req, res) {

  if (req.params.searchText.toLowerCase() === 'all' || !req.params.searchText) {
    //returns all vacancies
    return getAllVacancies(req, res);
  } else {
    models.Job.findAll({
      include: [{
        model: models.Employer
      }],
      where: {
        $or: [
          {
            Title: {
              $like: '%' + req.params.searchText + '%'
            }
          },
          {
            Title: {
              $like: '%' + req.params.searchText
            }
          },
          {
            Title: {
              $like: req.params.searchText + '%'
            }
          },
          {
            JobSpecification: {
              $like: '%' + req.params.searchText + '%'
            }
          },
          {
            JobSpecification: {
              $like: req.params.searchText + '%'
            }
          },
          {
            JobSpecification: {
              $like: '%' + req.params.searchText
            }
          },
          {
            JobLocation: {
              $like: '%' + req.params.searchText
            }
          }
        ]
      },
      order: [['CreatedOn', 'DESC']]
    }).then(function(collection) {
      res.status(200).json(collection);
      res.end();
    });
  }
};

exports.updateVacancy = function(req, res) {
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
    .then(function(job) {
      if (job && job.id == vacancy.Id) {
        return res.status(200).json(job);
      }
    })
    .catch(err => res.status(400))
};

exports.deleteVacancy = function(req, res) {
  models.Job.destroy({
    Where: {
      id: req.params.id
    }
  })
    .then(function(rowDelete) {
      if (rowDelete === 1) {
        models.Job.findAll({
          order: [['CreatedOn', 'DESC']]
        }).then(jobs => res.status(200).json(Employers))
      } else {
        res.status(403);
        res.end();
      }
    })
    .catch(err => res.status(400))
};

exports.getVacancyById = function(req, res) {
  models.Job.findOne({
    include: [{
      model: models.Employer
    }],
    Where: {
      id: req.params.id
    }
  })
    .then(function(job) {
      return res.status(200).json()
    })
    .catch(err => res.status(400))
};


