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
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.on('close', () => {

});

server.listen(port, () => console.log(`API running on localhost:${port}`));