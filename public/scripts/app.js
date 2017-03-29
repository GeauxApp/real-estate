/*** Main Angular File ***/

angular
	.module('realEstate', ['ngRoute'])
	.config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider){
	$routeProvider
	.when('/', {
		templateUrl: '/templates/properties',
		controllerAs: 'propsIndexCtrl',
		controller: 'propertiesIndexController'
	})
	.when('/properties', {
		templateUrl: '/templates/properties',
		controllerAs: 'propsIndexCtrl',
		controller: 'propertiesIndexController'
	})
	.when('/properties/:id', {
		templateUrl: '/templates/properties-show',
		controllerAs: 'propsShowCtrl',
		controller: 'propertiesShowController'
	})

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
}