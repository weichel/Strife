'use strict';
//Requires Utils


function Web(args){
	Utils.Initialize(this,args);
	
	this.express = require('express')
	, this.io = require('socket.io')
	, this.dust = require('dustjs-linkedin')
	, this.cons = require('consolidate')
	, this.crypto = require('crypto')
	, this.fs = require('fs')
	, this.bodyParser = require('body-parser')
	, this.cookieParser = require('cookie-parser')
	, this.httpreq = require('http')
	, this.session = require('express-session')
	, this.mongoStore = require('connect-mongo/es5')(this.session)
	, this.salt = "osaldhnfkjasbdfkjbi1`iu1n3kej32k1nk3ndkjfnkin312323sdnfgk"; //crypto.randomBytes(128).toString('base64');
	
	this.http = this.express();
	this.http.server = this.httpreq.createServer(this.http);
	this.sock = this.io(this.http.server)
	
	this.http.use(this.express.static(__dirname + '/public'));
	this.http.engine('dust', this.cons.dust);
	this.http.set('views', __dirname + '/views');
	this.http.set('view engine', 'dust');
	
	/*this.sessionStore = new this.mongoStore({ db : "Sessions" }, function(e){
		this.http.use(this.bodyParser());
		this.http.use(this.cookieParser());
		this.http.use(this.session({
			store: this.sessionStore,
			secret: "killamanjaro"
		}));	
		this.sessionStore.clear();
	});*/
	
	this.router = this.express.Router();
	
	
	this.initRouter();
	
	this.http.use('/',this.router); //Initialize all routes
	this.http.server.listen('80'); //Listen on HTTP server
	
};

Web.prototype = Utils.Prototype([],{
	constructor: Web,
	express: {},
	io: {},
	dust: {},
	cons: {},
	crypto: {},
	fs: {},
	bodyParser: {},
	cookieParser: {},
	session: {},
	httpreq: {},
	salt: "",
	mongoStore: {},
	sessionStore: {},
	http: {},
	sock: {},
	clients: {},
	router: {},
	
	initRouter: function(){
		this.router.get('/', function(req,res){
			res.render ('index', {title: 'index'});
		});
	},
	
	initSocket: function(){
	
		this.sock.on('connection', function(socket){
			
			socket.on('message',function(msg){
			
			});
			socket.on('disconnect',function(){
			
			});
			
		});
	},
});



module.exports = global.Web = Web;