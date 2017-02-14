var module = angular.module('Item.kuaiBo', [
]);
module.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/kuaiBo', {
        templateUrl: 'kuaiBo/view.html',
        controller: 'kuaiBoController'
    });
}]);
module.controller("kuaiBoController",["$scope",function ($scope) {
    $scope.title = "快报"
}]);