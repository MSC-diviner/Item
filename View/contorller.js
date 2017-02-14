var module = angular.module('Item.View', [
    'ngRoute'
]);
module.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/View', {
        templateUrl: 'View/view.html',
        controller: 'ViewController'
    });
}]);
module.controller("ViewController",["$scope","$http",function ($scope,$http) {
    $http.get("http://localhost/Item/pHp/View.php",{})
        .success(function (response) {
            $scope.data = response.records;
            console.log($scope.data);
        }).error(function () {
        alert("需哦了");
    })
}]);
