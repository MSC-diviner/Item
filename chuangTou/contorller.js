var module = angular.module('Item.chuangTou', [
    'ngRoute'
]);
module.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/chuangTou/:page', {
        templateUrl: 'chuangTou/view.html',
        controller: 'chuangTouController'
    });
}]);
module.controller("chuangTouController",["$scope",function ($scope) {
    $scope.title = "创投"
}]);
