var module = angular.module('Item.zhiKe', [
    
]);
module.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/zhiKe', {
        templateUrl: 'zhiKe/view.html',
        controller: 'zhiKeController'
    });
}]);
module.controller("zhiKeController",["$scope",function ($scope) {
    $scope.title = "智客";
}]);
