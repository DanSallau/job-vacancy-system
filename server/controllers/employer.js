const models = require('../models');
const encryption = require('../utilities/encryption');

exports.getAllEmployers = function(req, res) {
  models.Employer
    .findAll({
      order: [['CreatedOn', 'DESC']]
    })
    .then(function(collection) {
      res.status(200).json(collection);
      res.end();
    })
    .catch((err) => {
      console.log(err);
      res.status(400);
      res.end();
    });
};

exports.getActiveEmployers = function(req, res) {
  models.Employer.findAll({
    where: {
      Active: true,
      order: [['CreatedOn', 'DESC']]
    }
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

exports.createEmployer = function(req, res) {
  const employer = req.body;
  const salt = encryption.createSalt();

  models.Employer.create({
    FirstName: employer.FirstName,
    LastName: employer.LastName,
    Username: employer.Username,
    Company: employer.Company,
    active: true,
    Email: employer.Email,
    PassHash: encryption.hashPwd(salt, 'password123'),
    Salt: salt,
    Token: encryption.getToken(),
    Contact: employer.Contact,
    Address: employer.Address,
    ReceiveAlert: true
  })
    .then(function() {
      res.status(200).json({
        success: true
      });
      res.end();
    })
    .catch(err => res.status(400));
};

exports.deleteEmployer = function(req, res) {
  models.Employer.destroy({
    Where: {
      id: req.params.id
    }
  })
    .then(function(rowDelete) {
      if (rowDelete === 1) {
        models.Employer.findAll({
          order: [['CreatedOn', 'DESC']]
        }).then(employers => res.status(200).json(users))
      } else {
        res.status(403);
        res.end();
      }
    })
    .catch(err => res.status(400))
}