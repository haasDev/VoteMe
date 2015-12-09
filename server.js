'use strict';
var express = require('express'),
    routes  = require('./app/routes/index.js'),
    app     = express();

routes(app);

app
  .use('/public', express.static(process.cwd() + '/public'))
  .listen(3000, function(){
    console.log('Listening on port 3000...');
  });
