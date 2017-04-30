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


    return service;
})