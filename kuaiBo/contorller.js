var module = angular.module('Item.kuaiBo', [
    'ngRoute'
]);
module.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/kuaiBo/:page', {
        templateUrl: 'kuaiBo/view.html',
        controller: 'kuaiBoController'
    });
}]);
module.controller("kuaiBoController",["$scope",function ($scope) {
    $scope.title = "快报"
}]);