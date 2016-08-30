
global.window = global.document = global;

var express = require('express');
var http = express();

http.get('/', function(req,res){
	
	console.log("here");
});

var server = http.listen('8000');


process.on('SIGINT', function () {
	server.close();
	console.log();
	console.log('Shutting down server..');
	process.exit(0);
});