
var module = angular.module('Item.View', [
    'ngRoute',
]);
module.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/View/:page', {
        templateUrl: 'View/view.html',
        controller: 'ViewController'
    });
}]);
module.controller('ViewController',["$scope","$http",'$routeParams','$route',function ($scope,$http,$routeParams,$route) {
    $http.get("pHp/View.php")
        .success(function (response) {
            var page = parseInt($routeParams.page);
            var count = Math.ceil(response.length/10)
            var arr = [];
            for (var i = 0;i < count; i++){
                var a = {}
                a.key = i
                arr.push(a);
            }
            $scope.arr = arr;
            console.log($scope.arr[5].key);
            var dataArr = [];
            var du = 0;
            changePage(page);
            function changePage(page) {
                if (page < parseInt(response.length/10)){
                    du = (page + 1) * 10
                }else {
                    du = response.length;
                }
                for (var i = page * 10;i < du;i++){
                    dataArr.push(response[i]);
                    console.log(i);
                }
                $scope.items = dataArr;
                $scope.currentPage = page;
                $scope.onePage = false;
            }
            $scope.go = function (page) {
                changePage(page);
                $route.updateParams({page:page});
            }
        })
}]);
