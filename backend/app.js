var express = require('express');
var path = require('path');
var app = express();
var Database = require('./database/controller.js');
var security = require('./security/util.js');

Database.Connect().then((result) => {
    Database.CreateStream('test',security.GenerateAccessCode(),2).then((result) => {
        console.log(result);
    }).catch(err => console.log(err));
});

module.exports = app;
