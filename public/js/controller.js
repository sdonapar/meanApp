var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl',['$scope','$http', function ($scope,$http) {
	$http.get('/api/phones').success( function(data){
		$scope.phones = data;
	});

  	$scope.orderProp = 'age';
}]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams,$http) {
    console.log($routeParams.phoneId)
    $http.get('/api/phones/' + $routeParams.phoneId).success(function(data){
    	$scope.phone = data;
    	console.log(data);
    });
  }]);	