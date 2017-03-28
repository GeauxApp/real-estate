angular
	.module('realEstate')
	.controller('propertiesIndexController', propertiesIndexController);

	propertiesIndexController.$inject = ['$http'];

	function propertiesIndexController($http){
		var vm = this;

		$http({
			method: 'GET',
			url: '/api/properties'
		}).then(function successCallback(response){
			vm.properties = response.data;
		}, function errorCallBack(response){
			console.log('There was an error getting the data', response);
		});
	}

