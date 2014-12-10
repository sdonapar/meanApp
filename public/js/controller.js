var myapp = angular.module('myapp', []);

myapp.controller('PhoneListCtrl', function ($scope,$http) {

	$http.get('/phones/phones.json').success( function(data){
		$scope.phones = data;
	});
	
  	$scope.orderProp = 'age';
});