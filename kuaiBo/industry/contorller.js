var module = angular.module('kuaiBo.industry', [
    'ngRoute',
]);
module.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/industry/:page', {
        templateUrl: 'industry/view.html',
        controller: 'industryController'
    });
}]);
module.controller('industryController',["$scope","$http",'$routeParams','$route',function ($scope,$http,$routeParams,$route) {
    $scope.totalCount = 0;
    //如果ajax或jsonp请求未完成,程序会先执行,此时ajax或jsonp里的subjects还没执行到,subjects可能不被识别,所以要先定义为空
    $scope.subjects = [];
    //每页显示10条
    var count = 10;
    //获取第几页
    var page = parseInt($routeParams.page);
    //当前是第几页
    $scope.currentPage = page;
    //从第几条数据开始
    var start = (page-1)*count;
    //总页数
    $scope.totalPages = 0;

    //接口地址
    var Api = "route.php";
//$http的post请求
    $http({
        method: "POST",
        url: Api,
        data: {type: '业界',index:start},
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        transformRequest: function (obj) {
            var str = [];
            for (var p in obj) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
            return str.join("&");
        }
    }).success(function (data, status, headers, config) {
        //接收到数据后的处理函数
        $scope.subjects = data;
        console.log(data)

    }).error(function (data, status, headers, config) {

    });

    $scope.go = function (page) {
        $route.updateParams({page:page});
    }
    $scope.next = function (page) {
        if(page<=2){
            $route.updateParams({page:page});
        }
    }

}]);
