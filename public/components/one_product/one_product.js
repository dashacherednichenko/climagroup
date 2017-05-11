/**
 * Created by dashacherednichenko on 19.04.17.
 */
App.controller('one_productCtrl', function ($scope, $http, $rootScope, $routeParams, cart, goods, ngToast) {
    var vm = this;
    vm.cart = {};
    var countValue=document.getElementById('count');


    console.log('$routeParams.id', $routeParams.productId)


    goods.getProduct($routeParams.productId).then(function (res) {
                // return res;
                vm.onePrPaint=res;
                console.log('Product1', res);
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
            var articul = $routeParams.productId;
            console.log('vm.articul', articul);
            if (vm.cart[articul]!=undefined) {
                vm.cart[articul]=(vm.cart[articul])*1+(countValue.value)*1;
            } else  {
                vm.cart[articul]=countValue.value;
            }
            localStorage.setItem('vm.cart', JSON.stringify(vm.cart))
            console.log( vm.onePrPaint.price);
            cart.getSum();
            ngToast.create({

                content: '<a href="/#!/basket" class="">'+vm.onePrPaint.name+' додано до кошика</a>'
            });
        }







})


