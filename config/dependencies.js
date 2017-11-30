var express = require('express');
var bodyParser = require('body-parser');
var route = require('../routes/index');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', route);

module.exports = app;