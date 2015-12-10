'use strict';
var express = require('express'),
    routes  = require('./app/routes/index.js'),
    mongo   = require('mongodb').MongoClient,
    app     = express();

mongo.connect('mongodb://localhost:27017/voteme', function(err, db){
  if(err) throw new Error("Database failed to connect!")
  else console.log("MongoDB successfully connected on port 27017");

  routes(app, db);

  app
    .use('/public', express.static(process.cwd() + '/public'))
    .use('/controllers', express.static(process.cwd() + '/app/controllers'))
    .listen(3000, function(){
      console.log('Listening on port 3000...');
    });
});
