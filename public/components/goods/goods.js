App.filter('unique', function() {
    return function(collection, keyname) {
        var output = [],
            keys = [];

        angular.forEach(collection, function(item) {
            var key = item[keyname];
            if(keys.indexOf(key) === -1) {
                keys.push(key);
                output.push(item);
            }
        });

        return output;
    };
});

App.controller('myGoodsCtrl', function ($scope, $http, $rootScope, cart, goods, ngToast){
    var vm = this;
    vm.cart = {};
    vm.goods=[];

    goods.getGoods().then(function (res) {
        vm.goods = res;
        console.log('goods', vm.goods)
    })




    vm.addToCartClick = function (id, price, Company, Type, Model) {
        console.log('You clock on '+ id);
        var articul = id;
        console.log('articul', articul);
        if (vm.cart[articul]!=undefined) {
            vm.cart[articul]++;
        } else  {
            vm.cart[articul]=1
        }
        localStorage.setItem('vm.cart', JSON.stringify(vm.cart))
        console.log('price', price);
        console.log('$rootScope.orderPrice', $rootScope.orderPrice);
        // if($rootScope.orderPrice){
        //     $rootScope.orderPrice  = $rootScope.orderPrice + +price;
        // }else{
        //     $rootScope.orderPrice = price;
        // }
        cart.getSum();
        ngToast.create({
            content:
            '<a href="/#!/basket" class="">'+vm.goods[articul-1].Type +' '
            +vm.goods[articul-1].Company
            +' '+vm.goods[articul-1].Model+' добавлен в корзину' +
            '</a>'
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



