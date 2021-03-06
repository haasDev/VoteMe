(function(){
  'use strict';

  var mongoose = require('mongoose'),
      Schema   = mongoose.Schema;

  var User = new Schema({
    github: {
      id: String,
      displayName: String,
      username: String,
      publicRepos: Number
    },
    nbrClicks: {
      clicks: Number
    }
  });

  module.exports = mongoose.model('User', User);
}());
