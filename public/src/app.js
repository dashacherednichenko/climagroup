/**
 * Created by dashacherednichenko on 22.03.17.
 */
var App = angular.module("App", ["ngRoute","ngToast"]);
App.config(function ($routeProvider) {


    $routeProvider.when('/',{
        templateUrl:'../templates/main.html'
    }).when('/call-back',{
        templateUrl:'../components/call_back/call_back.html',
        controller:'callBackCtrl'
    }).when('/about',{
        templateUrl:'../components/about/about.html',
        controller:''
    }).when('/goods',{
        templateUrl:'../components/goods/goods.html',
        controller:'myGoodsCtrl'
    }).when('/basket',{
        templateUrl:'../components/basket/basket.html',
        controller:'basketCtrl'
    })
    //     .when('/my_account',{
    //     templateUrl:'../components/my_account/my_account.html',
    //     controller:''
    // })
        .when('/one_product',{
        templateUrl:'../components/one_product/one_product.html',
        controller:'one_productCtrl'
    })
    ;
});


