/**
 * Created by dashacherednichenko on 19.04.17.
 */
App.controller('one_productCtrl', function ($scope, $http, $rootScope, $routeParams, cart, goods, ngToast) {
    var vm = this;
    vm.cart = {};
    var countValue=document.getElementById('count');
    var divs = [];
    divs = document.getElementsByClassName('detail-img-thumbs-l-i');
    var slideIndex = 1;
    var sDiv = document.getElementById('idSlider-inner-h');
    var slider = document.getElementById('slider');
    vm.topArrow = false;
    vm.downArrow = true;
    console.log('$routeParams.id', $routeParams.productId)

    HTMLCollection.prototype.forEach = Array.prototype.forEach;
    NodeList.prototype.forEach = Array.prototype.forEach;


    goods.getProduct($routeParams.productId).then(function (res) {
                vm.onePrPaint=res;
                vm.good_images = vm.onePrPaint.image;
                console.log('Product1', vm.onePrPaint);
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

    vm.addProductToCartClick = function (id, price, Type, Model, Company) {
        var articul = $routeParams.productId;
        console.log('vm.articul', articul);
        if (vm.cart[articul]!=undefined) {
            vm.cart[articul]=(vm.cart[articul])*1+(countValue.value)*1;
        } else  {
            vm.cart[articul]=countValue.value;
        }
        localStorage.setItem('vm.cart', JSON.stringify(vm.cart));
        console.log( vm.onePrPaint.price);
        cart.getSum();
        ngToast.create({
            content:
            '<a href="/#!/basket" class="">'+vm.onePrPaint.Type+ ' '+ vm.onePrPaint.Company+ ' '+ vm.onePrPaint.Model+' добавлено в корзину</a>'
        });
    };

    vm.l_image = function (e, image) {
        document.base_image.src=image;
        $(".detail-img-thumbs-l-i").removeClass('active');
        var e_parent = e.parentNode;
        e_parent.classList.add('active');
        console.log('e_parent', e_parent);
        console.log('e', e);
        var div_active = document.getElementsByClassName('detail-img-thumbs-l-i active');
        console.log('8888', div_active);


        var arr = document.getElementsByClassName("detail-img-thumbs-l-i");
        for(var i=0; i<arr.length; i++) {
            arr[i].num = i;
            arr[i].addEventListener("click", function () {
                slideIndex =this.num+1;
            }, false);
        }
    };

    vm.plusSlides = function(n) {
        showSlides(slideIndex += n);
        document.base_image.src=vm.good_images[slideIndex-1];
        $(".detail-img-thumbs-l-i").removeClass('active');
        console.log('divs', divs)
        divs[slideIndex-1].classList.add('active');
    };



    function showSlides(n) {
        var i;
        var slides = vm.good_images;
        if (n>slides.length) {
            slideIndex = 1;
        }
        if (n<1) {
            slideIndex=slides.length;
        }
            // console.log('iuy', slides)
            // console.log('111', slideIndex)
    }


    vm.scrollDiv = function (n) {

        sDiv.scrollTop += n;
        vm.topArrow = true;
        console.log('sDiv.scrollTop', sDiv.scrollTop)
    };
    // sDiv.scrollTop = sDiv.scrollHeight



        // $("#go_top").hide().removeAttr("href");
        // if ($(sDiv).scrollTop() >="25") {
        //     $("#go_top").fadeIn("slow");
        // }




    //при загрузке страницы если прокрутка больше 200px - показывать кнопку вверх
// })
    // sDiv.scrollTo(function(){
    //     if (sDiv.scrollTo()<="50") $("#go_top").fadeOut("slow")
    //     else $("#go_top").fadeIn("slow")
    // });



    // var scroll_height = sDiv.scrollHeight;
    // var visible_height = sDiv.offsetHeight;
    console.log('slider', slider);
    console.log('slider2', divs);

    // el.scrollTop = ( scroll_height - visible_height ) + 'px';



//     vm.fullHeight = function (obj){
//             var fullHeight=0;
//         // for(var z=0; z<obj.length; z++) {
//         //     var fullHeight=0;
//         //     fullHeight+= obj[z].offsetHeight();
//         //     return fullHeight;
//         // }
//
//         obj.forEach(function(){
//             fullHeight+= $(this).offsetHeight();
//         });
//         return fullHeight;
//     }
//
//
//     // Теперь достаточно просто её вызвать и передать объект:
//     vm.fullHeight(divs);
//         var myHeight = vm.fullHeight(divs);
//
//
//     // var nodelist = document.querySelectorAll('.detail-img-thumbs-l-i');
//     // var divsArray = Array.from(nodelist);
//     console.log('myHeight', myHeight)
//     // for (var item of divs) {
//     //     log(item.id);
//     //     console.log('gggg', item.id)
//     // }

})


