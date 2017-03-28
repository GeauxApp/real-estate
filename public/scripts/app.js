/*** Main Angular File ***/

angular
	.module('realEstate', ['ngRoute'])
	.config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider){
	$routeProvider
	.when('/', {
		templateUrl: '/templates/properties',
		controllerAs: 'propertiesIndexCtrl',
		controller: 'propertiesIndexController'
	})
	.when('/properties', {
		templateUrl: '/templates/properties',
		controllerAs: 'propertiesIndexCtrl',
		controller: 'propertiesIndexController'
	})
	.when('/properties/:id', {
		templateUrl: '/templates/properties-show',
		controllerAs: 'propertiesShowCtrl',
		controller: 'propertiesShowController'
	})

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
}

// $(document).ready(function(){
// 	console.log('app.js loaded!');

// 	$.ajax({
// 		method: 'GET',
// 		url: '/api/properties',
// 		success: renderMultipleProperties,
// 		error: handleError
// 	});

// 	function handleError(err){
// 		console.log('error while getting all books');
// 		$('#propertyTarget').text('Failed to load properties, is the server working?');
// 	}

// 	function renderMultipleProperties(properties){
// 		properties.forEach(function(property){
// 			renderProperty(property);
// 		});
// 	}

// 	function renderProperty(property){
// 		console.log('rendering property', property);
// 		var propertyHtml = $('#properties-template').html();
// 		var propertiesTemplate = Handlebars.compile(propertyHtml);
// 		var html = propertiesTemplate(property);
// 		$('#propertyTarget').prepend(html);
// 	}

// });