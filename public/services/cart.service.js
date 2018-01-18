App.service('cart', function (goods) {
    var service = {},
        cart,
        goodsInCart = [];
    service.sum =0;
    
    service.getSum = function () {
        service.getGoodsInCart()
    }
    service.getGoodsInCart = function () {
        goodsInCart = [];
        service.sum = 0;
        if (JSON.parse(localStorage.getItem('vm.cart'))) {
            cart = JSON.parse(localStorage.getItem('vm.cart'))
        }
        goods.getGoods().then(function (res) {
            var allGoods = res;
            for (key in cart) {
                allGoods.forEach(function (item) {
                    if(item.id == key){
                        item.ammount = cart[key];
                        goodsInCart[goodsInCart.length] = item;
                        service.sum += (+item.price * item.ammount)
                    }
                });
            };
            console.log('service.sum', service.sum);
            console.log('vm.cart', cart);
            console.log('goods', allGoods[0].price);

        })

    }
    return service;
});