var mongoose = require('mongoose');

//connect to mongodb
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/real-estate-app");

module.exports.Property = require('./property.js');