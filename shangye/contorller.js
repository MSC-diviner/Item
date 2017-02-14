var module = angular.module('Item.shangye', [

]);
module.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/shangye', {
        templateUrl: 'shangye/view.html',
        controller: 'shangyeController'
    });
}]);
module.controller('shangyeController',["$scope",function ($scope) {
    $scope.title = "商业"
}]);