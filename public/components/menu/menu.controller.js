/**
 * Created by dashacherednichenko on 22.03.17.
 */
App.controller('menuCtrl',function($scope, $rootScope, cart){
    var vm = this;
    cart.getGoodsInCart();
    $scope.$watch(function () {
        return cart.sum;
    }, function (newVal, oldVal) {
        $rootScope.bascketPrice = newVal;


    })

    vm.menuLinks = [
        {
            name:'Головна',
            link:'#!/'
        },
        {
            name:"Зворотній зв'язок",
            link:'#!/call-back'
        },
        {
            name:"Про нас",
            link:'#!/about'
        },
        {
            name:"Товари",
            link:'#!/goods'
        }
    ]
    vm.menuLeftLinksBasket = [
        {
            name:'Корзина',
            link:'#!/basket'
        },
    ]
    // vm.menuLeftLinksMy = [
    //     {
    //         name:"Моя сторінка",
    //         link:'#!/my_account'
    //     },
    // ]
    // vm.myAcc = [
    //     {
    //         name:"Особисті дані",
    //         link:'#!/my_account'
    //     },
    //     {
    //         name:"Список замовлень",
    //         link:'#!/my_account'
    //     },
    //     {
    //         name:"Мої бажання",
    //         link:'#!/my_account'
    //     },
    //     {
    //         name:"Вихід",
    //         link:'#!/my_account'
    //     },
    // ]
    vm.testVar = 'Test varible';
    var test = 'test';

    vm.testClick = function (name) {
        console.log('You clock on '+ name);
    };

    vm.spanOrderTotal = document.getElementsByClassName('count');
    console.log('span', vm.spanOrderTotal);

    // vm.checkCart = function () {
    //     console.log('cart', vm.cart)
    //     if (this.Data=localStorage.getItem('vm.cart')!=null) {
    //         vm.cart = JSON.parse(localStorage.getItem('vm.cart'))
    //     }
    // };
    // vm.checkCart();
    //
    // vm.showSpanOrder = function () {
    //     if($.isEmptyObject(vm.cart)){
    //         vm.spanOrderTotal = document.getElementsByClassName('count');
    //             vm.spanOrderTotal.style.display="none";
    //         //перевіряю чи порожня корзина
    //     }
    //     }
    // vm.showSpanOrder();



    $(document).ready(function(){

        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('#top').fadeIn();
            } else {
                $('#top').fadeOut();
            }
        });

        $('#top').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });

    });

});