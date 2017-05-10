'use strict';

var http = require('http');
var path = require('path');
var express = require('express');

var port = process.env.PORT || 3030;
var app = module.exports = express();

// serve public
app.use(express.static(path.join(__dirname, 'public')));

// serve demo dist
app.use('/dist', express.static(path.join(__dirname, './dist')));


var server = http.createServer(app);

server.listen(port, function(err) {
	if (err) {
		throw err;
	}
	console.log('Server listening on port', port);
});
