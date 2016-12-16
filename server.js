var express = require('express'),
  //open = require('open'),
  path = require('path'),
  app = express(),
  filename,
  urlParts;

// this is how github works (master-branch/docs), do not change it for local development
app.get('/', function (req, res) {
  res.redirect('/developer-hub/');
});

app.get('/developer-hub/', function (req, res) {
  res.sendfile('./docs/index.html');
});

app.get('/developer-hub/*', function (req, res) {
  console.log(req.url);

  urlParts = req.url.split('/');
  filename = urlParts[urlParts.length - 1];

  if (req.url.indexOf('/developer-hub/static/') > -1){
    res.sendfile('./docs' + req.url);
  } else if (req.url.indexOf('index.html')) {
    res.sendfile('./docs/' + filename);
  }
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

