var path = require('path');
var express = require('express');
var app = express();
var port = 3000;


app.use(express.static('server'));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});


app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Server started on http://localhost:%s', port);
});