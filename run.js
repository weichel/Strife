'use strict';

global.window = global.document = global;
require('./utils');


require('./web');


var web = new Web();


process.on('SIGINT', function () {
	//Cleanup
	//server.close();
	console.log();
	console.log('Shutting down server..');
	process.exit(0);
});