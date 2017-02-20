var module = angular.module('Item.shouYe', [
    'ngRoute'
]);
module.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/shouYe', {
        templateUrl: 'shouYe/view.html',
        controller: 'shouYeController'
    });
}]);
module.controller('shouYeController',["$scope","$http",function ($scope,$http) {
    $http.get('pHp/todayNews.php')
        .success(function (res) {
            $scope.items1 = res;
        });
    $http.get('pHp/rmtj.php')
        .success(function (res) {
            $scope.items2 = res;
        });
    $http.get('pHp/jxdd.php')
        .success(function (res) {
            $scope.items3 = res;
        });
    $http.get('pHp/kjkb.php')
        .success(function (res) {
            $scope.items4 = res;
        })
}]);


