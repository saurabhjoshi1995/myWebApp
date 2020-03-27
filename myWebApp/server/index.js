var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');
var morgan = require('morgan')
var app = express();
var mongoConn = require('./dbConnections/mongoConnections')
global.__basepath = __dirname;

let server = app.listen(8000);
console.log("Server listening on port 8000")
