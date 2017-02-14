var module = angular.module('Item.zhiKe', [
    'ngRoute'
]);
module.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/zhiKe', {
        templateUrl: 'zhiKe/index.html',
        controller: 'zhiKeController'
    });
}]);
module.controller("zhiKeController",["$scope",function ($scope) {
    $scope.title = "智客";
}]);
