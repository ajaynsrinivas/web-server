var express = require('express');
var middleware = require('./middleware.js')
var app = express();
var port = process.env.PORT||3000;


app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication, function(req,res){
    res.send('About us');
});

app.use(express.static(__dirname+'/public'));

app.listen(port,function(){
    console.log('Express started successfully on port - '+port);
});

//---------------
//var express = require('express');
//var app = express();
//var PORT = 3000;
//
//var middleware = {
//	requireAuthentication: function (req, res, next) {
//		console.log('private route hit!');
//		next();
//	},
//	logger: function (req, res, next) {
//		console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
//		next();
//	}
//};
//
//app.use(middleware.logger);
//
//app.get('/about', middleware.requireAuthentication, function (req, res) {
//	res.send('About Us');
//});
//
//app.use(express.static(__dirname + '/public'));
//
//app.listen(PORT, function () {
//	console.log('Express server started on port ' + PORT + '!');
//});