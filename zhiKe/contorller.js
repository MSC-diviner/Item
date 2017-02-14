var module = angular.module('Item.zhiKe', [
    'ngRoute'
]);
module.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/zhiKe/:page', {
        templateUrl: 'zhiKe/view.html',
        controller: 'zhiKeController'
    });
}]);
module.controller("zhiKeController",["$scope",function ($scope) {
    $scope.title = "智客";
}]);
