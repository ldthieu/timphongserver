//var app = require('./config/dependencies');
var express = require('express');
var bodyParser = require('body-parser');
var route = require('./routes/index');
var { port_api } = require('./config/config')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', route);

app.listen(port_api, () => {
    console.log('listenning in port: ' + port_api);
});