//allows for seeding app with data
//run 'node seed.js' from the root of the project folder

var db = require('./models');

var propertiesList = [
				{
				streetAddress: '35 La Grande',
				city: 'San Francisco',
				state: 'CA',
				bedroomCount: 4,
				bathCount: 3
				},
				{
				streetAddress: '550 33rd Avenue',
				city: 'San Francisco',
				state: 'CA',
				bedroomCount: 4,
				bathCount: 4
				},
				{
				streetAddress: '835 46th Avenue',
				city: 'San Francisco',
				state: 'CA',
				bedroomCount: 3,
				bathCount: 2	
				}
			];


db.Property.remove({}, function(err, properties){
	db.Property.create(propertiesList, function(err, properties){
		if (err) { return console.log('ERROR', err);}
		console.log("all properties: ", properties);
		console.log("created", properties.length, "properties");
		process.exit();
	});
});