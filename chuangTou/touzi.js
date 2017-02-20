var module = angular.module('Item.touzi', [
    'ngRoute'
]);
module.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/touzi/:page', {
        templateUrl: 'chuangTou/touzi.html',
        controller: 'touZiController'
    });
}]);
module.controller('touZiController',["$scope","$http",'$routeParams','$route',function ($scope,$http,$routeParams,$route) {
    $http.get("pHp/touzi.php")
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



