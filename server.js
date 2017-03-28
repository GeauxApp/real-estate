/********** Server-Side Javascript **********/

//require express and other modules
var express = require('express');
//generate a new express app
var app = express();
var bodyParser = require('body-parser');

//serve static file from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
//need this so that we can accept request payloads
app.use(bodyParser.json());

var controllers = require('./controllers');

/********** Routes **********/

/*** HTML Endpoints ***/

//define a root route: localhost:3000/
app.get('/', function homepage(req, res){
	res.sendFile(__dirname + '/views/index.html');
});

app.get('/templates/:name', function templates(req, res){
	var name = req.params.name;
	res.sendFile(__dirname + '/views/templates/' + name + '.html');
});

/*** JSON API Endpoints ***/

app.get('/api', controllers.api.index);

app.get('/api/properties', controllers.properties.index);

app.get('/api/properties/:propertyId', controllers.properties.show);

/********** Server **********/

//listen on port 3000
app.listen(process.env.PORT || 3000, function(){
	console.log("Express server is running on http://localhost:3000/");
});