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
      res.status(400);
      res.end();
    });
};

exports.getActiveEmployers = function(req, res) {
  models.Employer.findAll({
    where: {
      Active: true
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

exports.createEmployer = function(req, res) {
  const employer = req.body;
  const salt = encryption.createSalt();

  models.Employer.findOne({
    where: {
      $or: [
        {
          Username: {
            $eq: employer.Username
          }
        },
        {
          Email: {
            $eq: employer.Email
          }
        }
      ]
    }
  })
    .then(function(company) {
      if (company !== null) {
        //Return employer if it exist
        return res.status(200).json(company);
      } else {
        //create new employer if one doesnt exist
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
          ReceiveAlert: employer.ReceiveAlert
        })
          .then(function(user) {
            res.status(200).json(user);
            res.end();
          })
          .catch(err => res.status(400));
      }
    })
    .catch(err => res.status(400))


};

exports.deleteEmployer = function(req, res) {
  models.Employer.destroy({
    where: {
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