'use strict;'

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const api = require('./config/route');
const models = require('./models');
const encryption = require('./utilities/encryption');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../', 'dist')));
app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.on('close', () => {
  models.sequelize.close();
});
models.sequelize.sync({
  force: true
})
  .then(function(schema) {
    // Table created
    var salt1 = encryption.createSalt();
    var salt2 = encryption.createSalt();
    var salt3 = encryption.createSalt();
    return models.Employer
      .bulkCreate([
        {
          FirstName: 'Masud',
          LastName: 'Salihu',
          Username: 'masud',
          Company: 'Ezypay Pty Ltd',
          active: true,
          Email: 'masud@yahoo.com',
          PassHash: encryption.hashPwd(salt1, 'password123'),
          Salt: salt1,
          Token: encryption.getToken(),
          Contact: '0102443167',
          Address: 'xxxxxxxx'
        },
        {
          FirstName: 'Nuru',
          LastName: 'Salihu',
          Username: 'nuru',
          Company: 'CCCC Pty Ltd',
          Active: false,
          Email: 'nuruddeensalihu@yahoo.com',
          PassHash: encryption.hashPwd(salt2, 'password123'),
          Salt: salt2,
          Role: 'admin',
          Token: encryption.getToken(),
          Contact: '0102443167',
          Address: 'xxxxxxxx'
        },
        {
          FirstName: 'Siraj',
          LastName: 'Salihu',
          Username: 'siraj',
          Company: 'CCCC Pty Ltd',
          Active: true,
          Email: 'siraj@yahoo.com',
          PassHash: encryption.hashPwd(salt3, 'password123'),
          Salt: salt3,
          Role: 'premium',
          Token: encryption.getToken(),
          Contact: '0102443167',
          Address: 'xxxxxxxx'
        }

      ])
      .then(function() {
        return models.Employer.findOne();
      })
      .then(function(employer) {
        console.log('the users here')
        if (employer) {
          models.Job
            .bulkCreate([
              {
                Title: 'Typescript Reflect.getMetadata design:type returns Object instead of Date without angular testbed',
                JobSpecification: 'Typescript Reflect.getMetadata design:type returns Object instead of Date without angular testbed',
                JobLocation: 'Selangor',
                FeaturedJob: true
              },
              {
                Title: 'Typescript Reflect.getMetadata design:type returns Object instead of Date without angular testbed',
                JobSpecification: 'Typescript Reflect.getMetadata design:type returns Object instead of Date without angular testbed',
                JobLocation: 'Selangor',
                FeaturedJob: true
              },
              {
                Title: 'Typescript Reflect.getMetadata design:type returns Object instead of Date without angular testbed',
                JobSpecification: 'Typescript Reflect.getMetadata design:type returns Object instead of Date without angular testbed',
                JobLocation: 'Selangor',
                FeaturedJob: true
              },
              {
                Title: 'Typescript Reflect.getMetadata design:type returns Object instead of Date without angular testbed',
                JobSpecification: 'Typescript Reflect.getMetadata design:type returns Object instead of Date without angular testbed',
                JobLocation: 'Selangor',
                FeaturedJob: true
              }
            ])
            .catch(err => console.log(err))
        }
      })
      .catch(function(err) {
        console.log('the first error is', err);
      });
  })
  .then(() => {
    server.listen(port, () => console.log(`API running on localhost:${port}`));
  })
  .catch((err) => console.log('There is an error', err))