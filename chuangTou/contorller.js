var module = angular.module('Item.chuangTou', [
]);
module.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/chuangTou', {
        templateUrl: 'chuangTou/view.html',
        controller: 'chuangTouController'
    });
}]);
module.controller("chuangTouController",["$scope",function ($scope) {
    $scope.title = "创投"
}]);
