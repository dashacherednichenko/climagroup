/**
 * Created by dashacherednichenko on 03.05.17.
 */
App.controller('editCtrl', function ($scope, $http, $rootScope, $routeParams, cart, goods, ngToast) {
        var vm = this;
        var strOnePrPaint = JSON.stringify(vm.onePrPaint);
        var newProd = {};


        console.log('$routeParams.id', $routeParams.id);
        goods.getProduct($routeParams.id).then(function (res) {
            vm.onePrPaint = res;
            vm.good_images = vm.onePrPaint.image;
            newProd.image =vm.onePrPaint.image;
            console.log('newProd.image', newProd.image)
            console.log('Product1', vm.onePrPaint);
            if  (good_images.lenght>0) {
                document.getElementById('inputFile').style.display="none"
            } else {
                document.getElementById('inputFile').style.display="inline-block"
            };


        })

        goods.getGoods().then(function (res) {
            vm.goods = res;
            console.log(vm.goods.length+1)
        })

        vm.saveChanges = function () {
            console.log(strOnePrPaint)
            newProd.id = vm.onePrPaint.id;
            newProd.Company   = document.getElementsByName('Company')[0].value;
            newProd.price = document.getElementsByName('price')[0].value;
            newProd.Description = document.getElementsByName('intro')[0].value;
            // newProd.image =document.getElementById('imgLogo').src;
            console.log('newProd', newProd.image)


            if ($routeParams.id<=vm.goods.length) {
                if (document.getElementById('inputFile').files[0]!= undefined) {
                    var imgfilename = document.getElementById('inputFile').files[0].name;
                    $('#imgLogo').attr('src', 'http://localhost:8881/images/goods/' + imgfilename);
                    // newProd.image =document.getElementById('imgLogo').src;
                }
                $.ajax({
                    dataType: 'json',
                    type: 'POST',
                    data: newProd,
                    url: 'http://localhost:8881/product/'+newProd.id,
                    beforeSend: function() {
                        console.log('send')
                    },
                    success: function (data) {
                        console.log('success', data)
                    },
                    error: function (error) {
                        console.error(error)
                    },
                    complete: function () {
                        console.log('complete')
                    }
                })
                ngToast.create({

                    content: 'зміни збережено'
                });
            } else if ($routeParams.id==vm.goods.length+1) {
                if (document.getElementById('inputFile').files[0]!= undefined) {
                    var imgfilename = document.getElementById('inputFile').files[0].name;
                    $('#imgLogo').attr('src', 'http://localhost:8881/images/goods/' + imgfilename);
                    // newProd.image =document.getElementById('imgLogo').src;
                }
                newProd.id = $routeParams.id;
                $.ajax({
                    dataType: 'json',
                    type: 'POST',
                    data: newProd,
                    url: 'http://localhost:8881/product',
                    beforeSend: function() {
                        console.log('send')
                    },
                    success: function (data) {
                        console.log('success', data)
                    },
                    error: function (error) {
                        console.error(error)
                    },
                    complete: function () {
                        console.log('complete')
                    }
                })
                ngToast.create({

                    content: 'товар додано'
                });
            } else {
                alert('невірний id')
            }


// console.log(newProd);
//             console.log(newProd.image)
//             console.log('h',vm.onePrPaint)
//             console.log('$routeParams.id2', $routeParams);
        }
    }
)

