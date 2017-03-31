//allows for seeding app with data
//run 'node seed.js' from the root of the project folder

var db = require('./models');

var propertiesList = [
				{
				streetAddress: '35 La Grande',
				city: 'San Francisco',
				state: 'CA',
				bedroomCount: 4,
				bathCount: 3,
				showSplashImage: 'https://github.com/laurakathleen/FW-Construction/blob/master/Images/La-Grande/la-grande-ext.png?raw=true',
				images: ['https://github.com/laurakathleen/FW-Construction/blob/master/Images/La-Grande/la-grande-ext.png?raw=true', 'https://github.com/laurakathleen/FW-Construction/blob/master/Images/La-Grande/la-grande-dining2.png?raw=true', 'https://github.com/laurakathleen/FW-Construction/blob/master/Images/La-Grande/la-grande-bed2.png?raw=true', 'https://github.com/laurakathleen/FW-Construction/blob/master/Images/La-Grande/la-grande-bed4.png?raw=true', 'https://github.com/laurakathleen/FW-Construction/blob/master/Images/La-Grande/la-grande-kitchen2.png?raw=true', 'https://github.com/laurakathleen/FW-Construction/blob/master/Images/La-Grande/la-grande-master.png?raw=true', 'https://github.com/laurakathleen/FW-Construction/blob/master/Images/La-Grande/la-grande-living.png?raw=true', 'https://github.com/laurakathleen/FW-Construction/blob/master/Images/La-Grande/la-grande-patio.png?raw=true', 'https://github.com/laurakathleen/FW-Construction/blob/master/Images/La-Grande/la-grande-backyard.png?raw=true']
				},
				{
				streetAddress: '550 33rd Avenue',
				city: 'San Francisco',
				state: 'CA',
				bedroomCount: 4,
				bathCount: 4,
				showSplashImage: 'https://github.com/laurakathleen/FW-Construction/blob/master/Images/33rd/33rd-ave-ext.jpg?raw=true',
				images: ['https://github.com/laurakathleen/FW-Construction/blob/master/Images/33rd/33rd-ave-ext.jpg?raw=true', 'https://github.com/laurakathleen/FW-Construction/blob/master/Images/33rd/33rd-ave-dining.jpg?raw=true', 'https://github.com/laurakathleen/FW-Construction/blob/master/Images/33rd/33rd-ave-den2.jpg?raw=true', 'https://github.com/laurakathleen/FW-Construction/blob/master/Images/33rd/33rd-ave-kitchen.jpg?raw=true', 'https://github.com/laurakathleen/FW-Construction/blob/master/Images/33rd/33rd-ave-living.jpg?raw=true', 'https://github.com/laurakathleen/FW-Construction/blob/master/Images/33rd/33rd-ave-bed.jpg?raw=true', 'https://github.com/laurakathleen/FW-Construction/blob/master/Images/33rd/33rd-ave-bed4.jpg?raw=true', 'https://github.com/laurakathleen/FW-Construction/blob/master/Images/33rd/33rd-ave-bath2.jpg?raw=true', 'https://github.com/laurakathleen/FW-Construction/blob/master/Images/33rd/33rd-ave-bar.jpg?raw=true', 'https://github.com/laurakathleen/FW-Construction/blob/master/Images/33rd/33rd-ave-backyard.jpg?raw=true']
				},
				{
				streetAddress: '835 46th Avenue',
				city: 'San Francisco',
				state: 'CA',
				bedroomCount: 3,
				bathCount: 2,
				showSplashImage: 'https://github.com/laurakathleen/FW-Construction/blob/master/Images/46th/46th-Ave-Ext.jpg?raw=true',
				images: ['https://github.com/laurakathleen/FW-Construction/blob/master/Images/46th/46th-Ave-Ext.jpg?raw=true', 'https://github.com/laurakathleen/FW-Construction/blob/master/Images/46th/46th-Den.jpg?raw=true', 'https://github.com/laurakathleen/FW-Construction/blob/master/Images/46th/46th-Living.jpg?raw=true', 'https://github.com/laurakathleen/FW-Construction/blob/master/Images/46th/46th-bath1.jpg?raw=true', 'https://github.com/laurakathleen/FW-Construction/blob/master/Images/46th/46th-bed2.jpg?raw=true', 'https://github.com/laurakathleen/FW-Construction/blob/master/Images/46th/46th-kitchen.jpg?raw=true', 'https://github.com/laurakathleen/FW-Construction/blob/master/Images/46th/46th-Backyard.jpg?raw=true'] 
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