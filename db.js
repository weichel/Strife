'use strict';
//Requires Utils


var Database  = function(db,books){
	this.db = db;
	this.books = books;
	this.self = require("mongojs").connect(db, books);
};

module.exports = global.Database = Database;