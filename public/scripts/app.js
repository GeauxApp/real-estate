// /* Client-side JS
// This is my main angular file.
// */

// angular
// 	.module('real-estate', ['ngRoute'])

$(document).ready(function(){
	console.log('app.js loaded!');

	$.ajax({
		method: 'GET',
		url: '/api/properties',
		success: renderMultipleProperties,
		error: handleError
	});

	function renderMultipleProperties(properties){
		properties.forEach(function(property){
			renderProperty(property);
		});
	}

	function handleError(err){
		console.log('error while getting all books');
		$('#propertyTarget').text('Failed to load properties, is the server working?');
	}

	function renderProperty(property){
		console.log('rendering property', property);
		var propertyHtml = $('#properties-template').html();
		var propertiesTemplate = Handlebars.compile(propertyHtml);
		var html = propertiesTemplate(property);
		$('#propertyTarget').prepend(html);
	}
});