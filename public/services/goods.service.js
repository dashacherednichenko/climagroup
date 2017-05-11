App.service('goods', function ($http) {
    var service = {}

    service.getGoods = function () {
        var goods;
        return $http({
            method: 'GET',
            url: 'http://localhost:8881/getTov'
        }).then(function successCallback(response) {
            return response.data;
        });
    }
    
    service.getProduct = function (productId) {
        return $http({
            method:'GET',
            url:'goods/' + productId
        }).then(function successCallback (res) {
            return res.data;
            console.log('Product',res);
        })

    }


    return service;
})