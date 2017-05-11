'use strict';
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var port = 8881;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
function start() {
    app.use(express.static(__dirname + '/public'));
    app.listen(port);
    console.log('Application start on port ' + port);
}
start();
//app.use(express.static(path.join(__dirname, '../')));

app.get('/getTov', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var contents = fs.readFileSync('public/goods.json', 'utf8');
    res.end(contents);
});

app.route('/goods')
    .get(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        var contents = fs.readFileSync('public/goods.json', 'utf8');
        res.end(contents);
    })
    .post(function (req, res) {
    if(req.body.id && req.body.name && req.body.price && req.body.description && req.body.image ){
        var goods = fs.readFileSync('public/goods.json', 'utf8');
        goods = JSON.parse(goods);
        var newTovar = {};
        newTovar.id = +req.body.id;
        newTovar.name = req.body.name;
        newTovar.price = req.body.price;
        newTovar.description = req.body.description;
        newTovar.image = req.body.image;
        goods.push(newTovar);
        fs.writeFile('public/goods.json', JSON.stringify(goods), 'utf8', function (err) {
          if(!err){
              res.send(goods);
          }
        })

    }else {
        res.send({error:'Wrong data'});
    }
})

app.route('/goods/:productId')
    .get(function (req, res) {
        var goods = fs.readFileSync('public/goods.json', 'utf8');
        goods = JSON.parse(goods);
        var selectedProduct;
        var productId = req.params.productId;
        for (var i=0; i<goods.length; i++) {
            if(goods[i].id == productId) {
                selectedProduct = goods[i];
            }
        }
        if(selectedProduct){
            res.send(selectedProduct)
        }else{
            res.send({err:'No product with id: '+ productId})
        }

    })
    .post(function (req, res) {
        var goods = fs.readFileSync('public/goods.json', 'utf8');
        goods = JSON.parse(goods);
        var selectedProduct;
        var productId = req.params.productId;
        for (var i=0; i<goods.length; i++) {
            if(goods[i].id == productId) {
                selectedProduct = goods[i];

            }
        }
        if(selectedProduct){
            selectedProduct.name=req.body.name;
            selectedProduct.price = req.body.price;
            selectedProduct.description = req.body.description;
            selectedProduct.image = req.body.image;

            console.log(goods);
            fs.writeFile('public/goods.json', JSON.stringify(goods), 'utf8', function (err) {
                if(!err){
                    res.send(selectedProduct);
                }
            })

        }else{
            res.send({err:'No product with id: '+ productId})
        }
        //res.send({productId: req.params.productId});
    });

// var express = require('express'),
//     app = express();
//
//
// var fs = require('fs');
//
// //console.log('yytryr',JSON.parse(fs.readFileSync('public/goods.json', 'utf8')));
//
//
// function start() {
//     app.use(express.static(__dirname + '/public'));
//     app.listen(8881);
// }
// start();
//
// app.get('/getTov', function (req, res) {
//     res.header('Content-Type', 'application/json');
//     res.send(JSON.parse(fs.readFileSync('public/goods.json', 'utf8')))
// });
