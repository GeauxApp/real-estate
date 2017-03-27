var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PropertySchema = new Schema({
	streetAddress: String,
	city: String,
	state: String,
	bedroomCount: Number,
	bathCount: Number
});

//create the property model from the schema
var Property = mongoose.model('Property', PropertySchema);

module.exports = Property;