/**
 * Created by dashacherednichenko on 19.04.17.
 */
App.controller('one_productCtrl', function ($scope, $http, $rootScope, cart, ngToast) {
    var vm = this;
    vm.cart = {};
    var countValue=document.getElementById('count');

    vm.loadingGoods = function () {
        console.log('idProd', $rootScope.idProd);

        $http({
            method: 'GET',
            url: '/goods.json'
        }).then(function successCallback(response) {
            vm.goods=response.data;
            console.log('res',vm.goods);
            vm.onePrPaint={};
            vm.onePrPaint=vm.goods[$rootScope.idProd-1];
            console.log('onePrPaint', vm.onePrPaint)
        }, function errorCallback(response) {
            console.log('error');
        });
        vm.checkCart = function () {
            if (localStorage.getItem('vm.cart')!=null) {
                vm.cart = JSON.parse(localStorage.getItem('vm.cart'))
                console.log('содержимое мини корзини',vm.cart)
            }

        }
        vm.checkCart();

        vm.plusGoodsOneProd=function () {
            countValue.value ++;
        };
        vm.minusGoodsOneProd=function () {
            if (countValue.value >1){
                countValue.value --;
            } else {
                countValue.value=1
            }

        };

        vm.addProductToCartClick = function (id, price) {
            var articul = $rootScope.idProd;
            console.log('vm.articul', articul);
            if (vm.cart[articul]!=undefined) {
                vm.cart[articul]=(vm.cart[articul])*1+(countValue.value)*1;
            } else  {
                vm.cart[articul]=countValue.value;
            }
            localStorage.setItem('vm.cart', JSON.stringify(vm.cart))
            console.log( vm.onePrPaint.price);
            // console.log($rootScope.orderPrice);
            // if($rootScope.orderPrice){
            //     $rootScope.orderPrice  = $rootScope.orderPrice + +vm.onePrPaint.price*countValue.value;
            // }else{
            //     $rootScope.orderPrice = vm.onePrPaint.price*countValue.value;
            // }
            cart.getSum();
            cart.getSum();
            ngToast.create({

                content: '<a href="/#!/basket" class="">'+vm.goods[articul-1].name+' додано до кошика</a>'
            });
        }


    }
    vm.loadingGoods();



})


