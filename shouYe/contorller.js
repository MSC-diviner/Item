var module = angular.module('Item.shouYe', [
    'ngRoute'
]);
module.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/shouYe', {
        templateUrl: 'shouYe/view.html',
        controller: 'shouYeController'
    });
}]);
module.controller('shouYeController',["$scope",function ($scope) {
    $scope.title = "首页"
}]);
