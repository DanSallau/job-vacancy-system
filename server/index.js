const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const api = require('./config/route');
const models = require('./models');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')))
app.use('/api', api);
console.log('The environment is ', __dirname);
app.get('*', (req, res) => {
  res.sendFile(path.join('..', __dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);
console.log('The sequelize is ', models.sequelize);
server.on('close', () => {
  models.sequelize.close();
});
models.sequelize.sync({
  force: true
})
  .then(function(schema) {
    models.User
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
        return models.User.findAll();
      })
      .then(function(users) {
        console.log('the users here')
      })
      .catch(function(err) {
        console.log('the first error is', err);
      });
  })
  .then(() => {
    server.listen(port, () => console.log(`API running on localhost:${port}`));
  })
  .catch((err) => console.log('There is an error', err))