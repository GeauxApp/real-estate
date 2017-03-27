/********** Server-Side Javascript **********/

//require express and other modules
var express = require('express');
//generate a new express app
var app = express();

//serve static file from public folder
app.use(express.static(__dirname + '/public'));

var controllers = require('./controllers');

/********** Routes **********/

/*** HTML Endpoints ***/

//define a root route: localhost:3000/
app.get('/', function homepage(req, res){
	res.sendFile(__dirname + '/views/index.html');
});

/*** JSON API Endpoints ***/

app.get('/api', controllers.api.index);

app.get('/api/properties', controllers.properties.index);

//get all books
// app.get('/api/properties', function(req, res){
// 	//send all books as JSON response
// 	console.log('properties index');
// 	res.json(properties);
// });

// //get one property
// app.get('/api/properties/:id', function(req, res){
// 	//find one property by its id
// 	console.log('properties show', req.params);
// 	for (var i=0; i<properties.length; i++){
// 		if (properties[i]._id === req.params.id){
// 			res.json(properties[i]);
// 			break; //now that we've found the property we requested, we can stop searching
// 		}
// 	}
// });

// //create a new property
// app.post('/api/properties', function(req, res){
// 	//create a new property based on form data ('req.body')
// 	console.log('properties create', req.body);
// 	var newProperty = req.body;
// 	properties.push(newProperty);
// 	res.json(newProperty);
// });

// //update a property
// app.put('/api/properties/:id', function(req, res){
// 	//get property id from url params ('req.params')
// 	console.log('properties update', req.params);
// 	var propertyId = req.params.id;
// 	//find the index of the property we want to remove
// 	var updatePropertyIndex = properties.findIndex(function(element, index){
// 		return (element._id === parseInt(req.params.id)); //params are strings so parse it
// 	});
// });

// //delete a property
// app.delete('/api/properties/:id', function(req, res){
// 	//get property by id from url params ('req.params')
// 	console.log('properties delete', req.params);
// 	var propertyId = req.params.id;
// 	//find the index of the property we want to remove
// 	var deletePropertyIndex = properties.findIndex(function(element, index){
// 		return (element._id === parseInt(req.params.id)); //params are string so parse it
// 	});
// 	console.log('deleting property with index ', deletePropertyIndex);
// 	var propertyToDelete = properties[deletePropertyIndex];
// 	properties.splice(deletePropertyIndex, 1);
// 	res.json(propertyToDelete);
// });

/********** Server **********/

//listen on port 3000
app.listen(process.env.PORT || 3000, function(){
	console.log("Express server is running on http://localhost:3000/");
});