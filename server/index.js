'use strict;'

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const api = require('./config/route');
const models = require('./models');
const bulkData = require('./config/bulkCreate');
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../', 'dist')));
app.use('/api', api);
app.get('/search/:searchText', function(req, res) {
  console.log('Its finally here ', req.params);
})
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
    return models.Employer
      .bulkCreate(bulkData(1)['employer'])
      .then(function() {
        return models.Employer.findOne();
      })
      .then(function(employer) {
        if (employer) {
          models.Job
            .bulkCreate(bulkData(employer.id)['job'])
            .catch(err => console.log(err))
        }
      })
      .catch(function(err) {
        console.log('Error adding employers', err);
      });
  })
  .then(() => {
    server.listen(port, () => console.log(`API running on localhost:${port}`));
  })
  .catch((err) => console.log('There is an error with sequelize', err))