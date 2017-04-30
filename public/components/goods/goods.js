
App.controller('myGoodsCtrl', function ($scope, $http, $rootScope, cart, goods, ngToast){
    var vm = this;
    vm.cart = {};
    vm.goods=[];

    goods.getGoods().then(function (res) {
        vm.goods = res;
})


// var loadingGoods = function () {
//         $http({
//             method: 'GET',
//             url: '/goods.json'
//         }).then(function successCallback(response) {
//             vm.goods=response.data;
//             console.log('res',vm.goods);
//         }, function errorCallback(response) {
//         });
//
//     }
//     loadingGoods();

    vm.addToCartClick = function (id, price) {
        console.log('You clock on '+ id);
        var articul = id;
        console.log(articul);
        if (vm.cart[articul]!=undefined) {
            vm.cart[articul]++;
        } else  {
            vm.cart[articul]=1
        }
        localStorage.setItem('vm.cart', JSON.stringify(vm.cart))
        // vm.messageC= function(id) {
        //     var messageToBasket
        //     var mC=$('.messageCart').html('додано до кошика').show();
        // }
        console.log(price);
        console.log($rootScope.orderPrice);
        // if($rootScope.orderPrice){
        //     $rootScope.orderPrice  = $rootScope.orderPrice + +price;
        // }else{
        //     $rootScope.orderPrice = price;
        // }
        cart.getSum();
        ngToast.create({
            content: '<a href="/#!/basket" class="">'+vm.goods[articul-1].name+' додано до кошика</a>'
        });
    }



    vm.testClickProd = function (id) {

        $rootScope.idProd=id;
        console.log('You clock on '+ id);
    };

    vm.checkCart = function () {
        if (localStorage.getItem('vm.cart')!=null) {

            vm.cart = JSON.parse(localStorage.getItem('vm.cart'))
            console.log('содержимое мини корзини',vm.cart)
        }

    }
    vm.checkCart();




});



