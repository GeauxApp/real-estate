/******** DATABASE **********/

var db = require('../models');

//GET /api/properties
function index(req, res){
	db.Property.find({}, function(err, allProperties){
		res.json(allProperties);
	});
}

function show(req, res){
	db.Property.findById(req.params.propertyId, function(err, foundProperty){
		if(err) { console.log('propertiesController.show error', err); }
		console.log('propertiesController.show responding with ', foundProperty);
		res.json(foundProperty);
	});
}

//export public methods here
module.exports = {
	index: index,
	show: show
}