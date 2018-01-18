/**
 * Created by dashacherednichenko on 01.12.17.
 */
App.controller('aboutUsCtrl', function ($scope, $http, $rootScope, cart, goods, ngToast) {
    var vm = this;
    vm.cart = {};


    vm.changeSize = function (id) {
        var big = '700', small = '300';
        if (document.getElementById(id).width == big) {
            document.getElementById(id).width = small;
        }
        else {
            document.getElementById(id).width = big;
        }
    }
});
