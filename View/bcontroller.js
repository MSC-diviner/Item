var module = angular.module('Item.b', [
    'ngRoute',
]);
module.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/b/:page', {
        templateUrl: 'View/b.html',
        controller: 'BController'
    });
}]);
module.controller('BController',["$scope","$http",'$routeParams','$route',function ($scope,$http,$routeParams,$route) {
    $http.get("http://localhost/Item/pHp/bView.php")
        .success(function (response) {
            console.log(response);
            var page = parseInt($routeParams.page);
            var dataArr = [];
            var count = response.length;
            var du = 0;
            changePage(page);
            function changePage(page) {
                if (page < page){
                    du = (page + 1) * 10
                    if (page < 1){
                        du = response.length;
                    }
                }else {
                    du = response.length;
                }
                for (var i = page * 10;i < du;i++){
                    dataArr.push(response[i]);
                }
                $scope.items = dataArr;
                $scope.currentPage = page;
                $scope.onePage = false;
            }
            $scope.go = function (page) {
                switch (page){
                    case 0:
                        if ($scope.onePage){
                            changePage(page);
                            $route.updateParams({page:page});
                            break;
                        }
                    case 1:
                        changePage(page);
                        $route.updateParams({page:page});
                        break;
                    case 2:
                        changePage(page);
                        $route.updateParams({page:page});
                        break;
                    default:
                        break;
                }
            }
            $scope.nextPage = function (page) {
                if (page >= 0 && page <= 2){
                    $route.updateParams({page:page});
                }
            }
        })
}]);
