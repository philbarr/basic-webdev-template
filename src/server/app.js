var express = require('express');
var http = require('http');
var app = express();

// serve up our static web page and js
app.use(express.static('dist'))
http.createServer(app).listen(8080)