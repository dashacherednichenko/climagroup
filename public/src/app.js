/**
 * Created by dashacherednichenko on 22.03.17.
 */
var App = angular.module('prerender-tutorial', ["ngRoute","ngToast"]);
App.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix = '!';
    // $locationProvider.html5Mode({
    //     enabled: true,
    //     requireBase: false
    // });
    // $urlRouterProvider.otherwise('/');
        // $stateProvider
        //     .state('home', {
        //         url: '/home',
        //         templateUrl : 'views/home.html',
        //         data : { pageTitle: 'Home' }
        //
        //     })
        //     .state('about', {
        //         url: '/about',
        //         templateUrl : 'views/about.html',
        //         data : { pageTitle: 'About' }
        //     })

    $routeProvider.when('/',{
        templateUrl:'../components/main/main.html'
    }).when('/call-back',{
        templateUrl:'../components/call_back/call_back.html',
        controller:'callBackCtrl'
    }).when('/about',{
        templateUrl:'../components/about/about.html',
        controller:'aboutUsCtrl',
        // data : { pageTitle: 'About' }
    }).when('/product',{
        templateUrl:'../components/goods/goods.html',
        controller:'myGoodsCtrl'
    }).when('/basket',{
        templateUrl:'../components/basket/basket.html',
        controller:'basketCtrl'
    })
        .when('/services',{
        templateUrl:'../components/services/services.html',
        controller:''
    })

    //     .when('/my_account',{
    //     templateUrl:'../components/my_account/my_account.html',
    //     controller:''
    // })
        .when('/product/:productId',{
        templateUrl:'../components/one_product/one_product.html',
        controller:'one_productCtrl'
    })
        .when('/admin',{
            templateUrl:'../components/admin/admin.html',
            controller:'adminCtrl'
        })
        .when('/admin/edit/:id',{
            templateUrl:'../components/admin/edit/edit.html',
            controller:'editCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    //     .when('/test',{
    //     templateUrl:'../test/test.html',
    //     controller:''
    // })

}]);




