/**
 * Created by dashacherednichenko on 23.03.17.
 */
App.controller('basketCtrl', function ($scope, $http,$rootScope, cart) {
    var vm = this;
    vm.newBasket = [];
    vm.cart={};
    vm.divs = document.getElementById('totalPrice');
    vm.divOrder=document.getElementById('orderForm');


    var loadingGoods = function () {
        $http({
        method: 'GET',
        url: 'http://localhost:8881/getTov'
        // console.log(vm.goods)
    }).then(function successCallback(response) {
            vm.goods=response.data;
            vm.checkCart = function () {
                if (this.Data=localStorage.getItem('vm.cart')!=null) {
                    vm.cart = JSON.parse(localStorage.getItem('vm.cart'))
                }
            };
            vm.checkCart();

            console.log('содержимое корзини',vm.cart);

            vm.showBasket = function () {
                if($.isEmptyObject(vm.cart)){
                vm.title='Корзина порожня',
                    vm.divOrder.style.display="none",
                vm.aHref=document.getElementById('backToMain'),
                    vm.aHref.style.display="block"
                    //перевіряю чи порожня корзина і виводжу відповідний напис
                } else {
                    vm.title='Ваше замовлення';
                    for (vm.key in vm.cart) {
                        var basketItem = {};
                        basketItem.id = vm.goods[vm.key - 1].id;
                        basketItem.name = vm.goods[vm.key - 1].name;
                        basketItem.price = vm.goods[vm.key - 1].price;
                        basketItem.image = vm.goods[vm.key - 1].image;
                        basketItem.number = vm.cart[vm.key.valueOf(vm.key)];
                        console.log('obj', basketItem);
                        //перебір для об"єктів в корзині
                        vm.newBasket.push(basketItem);
                    }
                    console.log('newBasket', vm.newBasket)

                    vm.orderPriceTotal = [];
                    vm.orderPrice = 0;

                    for (var i = 0; i < vm.newBasket.length; i++) {
                        vm.orderPrice += vm.newBasket[i].price * vm.newBasket[i].number;
                    }
                    $rootScope.orderPrice = vm.orderPrice;
                    console.log($rootScope.orderPrice);

                }
            };
            vm.showBasket();
            run();

            function run() {
                if ($.isEmptyObject(vm.cart)) {
                    vm.divs.style.display = 'none';
                    vm.showBasket()
                }
            }


            vm.plusGoods=function (id) {
                vm.articul = id;
                console.log(vm.articul);
                vm.cart[vm.articul.valueOf(vm.key)]++;
                console.log('корзина после клика',vm.cart);
                localStorage.setItem('vm.cart', JSON.stringify(vm.cart));
                vm.checkCart();
                console.log('newBasket2', vm.newBasket)
                vm.newBasket=[];
                vm.showBasket();
                cart.getSum();

            };
            vm.minusGoods=function (id) {
                vm.articul = id;
                console.log(vm.articul);
                if(vm.cart[vm.articul.valueOf(vm.key)]>1)
                {vm.cart[vm.articul.valueOf(vm.key)]--}
                else
                {if(confirm('Видалити '+vm.goods[id-1].name+ ' з корзини?')){

                    delete vm.cart[vm.articul.valueOf(vm.key)];
                } else {

                    return false;
                }};
                console.log('корзина после клика',vm.cart);
                localStorage.setItem('vm.cart', JSON.stringify(vm.cart));
                vm.checkCart();
                console.log('newBasket2', vm.newBasket)
                vm.newBasket=[];
                vm.showBasket();
                cart.getSum();
                run();

            };
            vm.deleteGoods=function (id) {
                vm.articul = id;
                {if(confirm('Видалити '+vm.goods[id-1].name+ ' з корзини?')){

                    delete vm.cart[vm.articul.valueOf(vm.key)];
                } else {

                    return false;
                }};
                console.log('корзина после клика',vm.cart);
                localStorage.setItem('vm.cart', JSON.stringify(vm.cart));
                vm.checkCart();
                vm.newBasket=[];
                vm.showBasket();
                cart.getSum();
                run(); //перезапускаю функцію, щоб якщо видалимо всі товари, то писалось, що корзина порожня
            };

        }, function errorCallback(response) {
console.log('ERROR')
        });
        function saveData() {
            localStorage.setItem('vm.cart', JSON.stringify(vm.cart));
            return vm.cart;
        }

// Очищуємо дані
        function clearData() {
            vm.cart = {};
            saveData();
            return vm.cart;
        }

// Оформляемо замовлення ---
        vm.onClickOrder = function () {
            if (document.getElementById('order_form[name]').value=="") {
                // document.getElementById('err_fio').innerHTML='Введіть ПІБ';
                return false
            } else if(document.getElementById('order_form[phone]').value=="") {
                // document.getElementById('err_phone').innerHTML='Введіть номер';
                // document.getElementById('err_fio').style.display="none";
                return false
            } else if (document.getElementById('order_form[email]').value=="") {
                // document.getElementById('err_mail').innerHTML = 'Введіть пошту';
                // document.getElementById('err_phone').style.display="none";
                return false
            } else if (document.getElementById('order_form[address]').value=="") {
                // document.getElementById('err_address').innerHTML = 'Введіть адресу доставки';
                // document.getElementById('err_mail').style.display="none";
                return false
            }
            else
                {alert('Дякуємо! Замовлення оформлено :-)');
                    clearData()
                    vm.showBasket()
                    vm.divs.style.display = 'none';
                    // $rootScope.orderPrice = 0;
                    vm.newBasket = [];
                    vm.divOrder.style.display = "none";
                    $rootScope.bascketPrice = 0;
                    cart.getSum();
                }

        };




    };
    loadingGoods();
    vm.testClickProd = function (id) {

        $rootScope.idProd=id;
        console.log('You clock on '+ id);
    };

});
