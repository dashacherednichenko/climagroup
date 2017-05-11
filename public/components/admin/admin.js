/**
 * Created by dashacherednichenko on 01.05.17.
 */
App.controller('adminCtrl', function ($scope, $http, $rootScope, goods, cart) {
    var vm = this;
    vm.goods=[];

    goods.getGoods().then(function (res) {
        vm.goods = res;
        console.log(vm.goods)
    });

    vm.editProduct = function (id) {
        window.location.href="/#!/admin/edit/"+id
    }
    vm.pushNewProduct = function () {
        var lastItem = vm.goods[vm.goods.length-1]
        var newItem = lastItem.id+1;
        window.location.href="/#!/admin/edit/"+ newItem;
    }
})