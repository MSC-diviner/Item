var module = angular.module('Item.View', [
    'ngRoute'
]);
module.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/View/:page', {
        templateUrl: 'View/view.html',
        controller: 'ViewController'
    });
}]);
module.controller("ViewController",["$scope",function ($scope) {
    $scope.title = "观点"
}]);
