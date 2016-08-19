require("babel-register");

var app = require('./app/app');
var reactHandler = require('./lib/ReactHandler');

var express = require('express');
var handlebars = require('express-handlebars');
var path = require('path');

var server = module.exports = express();

server.engine('handlebars', handlebars({defaultLayout: 'main'}));
server.set('view engine', 'handlebars');

server.use(express.static(path.join(__dirname, 'public')));

server.get('/slides/*', function(req, res){
	app(req.url, {}, function(err, data, Handler){
		res.render('main', {content: reactHandler(data, Handler)});
	});
});

server.listen(5000, () => {
  console.log('server listening on port 5000');
});
