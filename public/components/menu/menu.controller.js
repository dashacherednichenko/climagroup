/**
 * Created by dashacherednichenko on 22.03.17.
 */
App.controller('menuCtrl',function($scope, $rootScope, $location, cart){
    var vm = this;
    cart.getGoodsInCart();
    $scope.$watch(function () {
        return cart.sum;
    }, function (newVal, oldVal) {
        $rootScope.bascketPrice = newVal;


    })

    vm.menuLinks = [
        {
            name:"Каталог товаров",
            link:'/product',
            img: '../../images/icons/menu.png',
            extraLinks: [
                {
                    name:"Бытовые кондиционеры",
                    link:'/product/byt',
                },
                {
                    name:"Полупромышленные кондиционеры",
                    link:'/product',
                },
                {
                    name:"Воздушные завесы",
                    link:'/goods',
                }
            ]
        },
        {
            name:"Монтаж и обслуживание",
            link:'/services',
            img: '../../images/icons/service.png'
        },
        {
            name:"О нас",
            link:'/about',
            img: '../../images/icons/about.png',
        },
        {
            name:"Контакты",
            link:'/call-back',
            img: '../../images/icons/contact.png'
        }

    ]
    vm.menuTopLinks = [
        {
            name:"Мой кабинет",
            link:'/my_account',
            img: '../../images/icons/account.png',
            extraLinks: [
                {
                    name:"Личные данные",
                    link:'/my_account'
                },
                {
                    name:"Список заказов",
                    link:'/my_account'
                },
                {
                    name:"Выход",
                    link:'/my_account'
                },
            ]
        },
        {
            name:'Корзина',
            link:'/basket',
            img: '../../images/icons/basket.png'
        },
    ]

    vm.testVar = 'Test varible';
    var test = 'test';

    vm.testClick = function (name) {
        console.log('You clock on '+ name);
    };

    console.log(vm.menuTopLinks[0].name)

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
    console.log('$location.url()', $location.url());
    console.log('$location.search()', $location.search());


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