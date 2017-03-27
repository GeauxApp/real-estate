// angular
// 	.module('realEstate', [])
// 	.controller('propertiesShowController', propertiesShowController);

// propertiesShowController.$inject = ['$http', '$routeParams'];

// function propertiesShowController ($http, $routeParams){
// 	var vm = this;

// 	$http({
// 		method: 'GET',
// 		url: '/api/properties/' + $routeParams.id
// 	}).then(function successCallback(json){
// 		vm.property = json.data;
// 	}, function errorCallback(response){
// 		console.log('There was an error getting the data', response);
// 	});
// }