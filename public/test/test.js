/**
 * Created by dashacherednichenko on 30.04.17.
 */
// var myApp= angular.module('myApp', []);
//
// myApp.controller('myCtrl', function ($scope, $http, $rootScope, cart, goods) {
//     //angular client side code
//
//     $scope.canSubmit = function () {
//         //some logic
//         return true;
//     }
// }
// )
//
// var ctrl, ctrlScope, injector;
//
// module("Testing the controller", {
//     setup: function () {
//         angular.module('myApp');
//         injector = angular.injector(['ng', 'myApp']);
//
//         ctrlScope = injector.get('$rootScope').$new();
//         ctrl = injector.get('$controller')('myCtrl', { $scope: ctrlScope });
//
//         ctrlScope.model = {
//             //model object
//         };
//     },
//     teardown: function () {
//
//     }
// });

// test("Given something happened then allow submit", function () {
//     ok(ctrlScope.getSum(4,5,6), "some functionality happened");
//     equal(true, ctrlScope.canSubmit());
// });
//





var app = angular.module('app', []);

app.config(function($provide) {
    $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
});

app.service('FooService', ['$http', function($http){
    return {
        getWord: function(){
            return $http.get('Word');
        }
    };
}]);

app.controller('FooController', ['$scope', 'FooService', function($scope, FooService){
    $scope.foo = null;
    $scope.sayHi = function() {
        FooService.getWord().then(function(word){
            $scope.foo = word.data;
        });
    };
}]);

var injector = angular.injector(['ng', 'app']);
var http = injector.get('$httpBackend');
var fService = injector.get('FooService');

var init = {
    setup: function() {
        this.$scope = injector.get('$rootScope').$new();
        var $controller = injector.get('$controller');
        $controller('FooController', {
            $scope: this.$scope,
            FooService: fService
        });
    }
};
module('Basic Controller Test', init);

test('service injected correctly', function(){
    ok(angular.isFunction(fService.getWord));
});

test('sayHi from service', function() {
    http.expectGET('Word').respond('hi');
    this.$scope.sayHi();
    http.flush();
    equal(this.$scope.foo, 'hi');
});






// var app = angular.module('app', []);
//
// app.config(function($provide) {
//     $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
// });
//
// app.service('FooService', ['$http', function($http){
//     return {
//         getWord: function(){
//             return $http.get('Word');
//         }
//     };
// }]);
//
// app.controller('FooController', ['$scope', 'FooService',  function($scope, FooService, cart){
//     $scope.foo = null;
//     $scope.sayHi = function() {
//         FooService.getWord().then(function(word){
//             $scope.foo = word.data;
//         });
//     };
// }]);
//
// var injector = angular.injector(['ng', 'app']);
// var http = injector.get('$httpBackend');
// var fService = injector.get('FooService');
//
// var init = {
//     setup: function() {
//         this.$scope = injector.get('$rootScope').$new();
//         var $controller = injector.get('$controller');
//         $controller('FooController', {
//             $scope: this.$scope,
//             FooService: fService
//         });
//     }
// };
//
// module('Basic Controller Test', init);
//
// test('service injected correctly', function(){
//     ok(angular.isFunction(fService.getWord));
// });
//
// test('sayHi from service', function() {
//     http.expectGET('Word').respond('hi');
//     this.$scope.sayHi();
//     http.flush();
//     equal(this.$scope.foo, 'hi');
// });
//
// test ('рахуємо загальну суму замовлення викликом сервісу service.getSum', function (assert) {
//     assert.equal(cart.getSum(4,5,6), 15, "нуль=нулю если все числа");
// })



// var app = angular.module('app', []);
// app.controller('testCtrl', ['$scope', 'testService', function ($scope, $http,$rootScope, goods, cart, testService) {
//     var vm = this;
//     $scope.test = null;
//     $scope.sayHi = function() {
//         testService.getWord().then(function(word){
//             $scope.test = word.data;
//         });
//     };
// }]);
//
//
//     console.log(QUnit)
//     var service = {}
// var injector = angular.injector(['ng', 'app']);
// var http = injector.get('$httpBackend');
// var tService = injector.get('testService');
// var init = {
//     setup: function() {
//         this.$scope = injector.get('$rootScope').$new();
//         var $controller = injector.get('$controller');
//         $controller('testCtrl', {
//             $scope: this.$scope,
//             testService: tService
//         });
//     }
// };
//     module('Basic Controller Test', init);
//
//     QUnit.test ("рахуємо загальну суму замовлення викликом сервісу service.getSum", function (assert) {
//         // var done = assert.async ()
//
//         assert.equal(cart.getSum(4,5,6), 15, "нуль=нулю если все числа");
//         // done ()
//         // assert.equal(getSum('4',5,6), 15, "нуль=нулю если есть строка");
//         // assert.notOk(getSum(-1,0,3), "если есть отрицательное, то периметр 0")
//     })
//
//
//
//
//
//
//
//
