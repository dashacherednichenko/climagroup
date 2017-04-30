/**
 * Created by dashacherednichenko on 21.03.17.
 */

var fs = require('fs');
var express = require('express');
var cors = require('cors');

var app = express();

app.use(cors());

function start() {
    app.use(express.static(__dirname + '/public'));
    app.listen(8881);
}
start();
//app.use(express.static(path.join(__dirname, '../')));

app.get('/getTov', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    contents = fs.readFileSync('public/goods.json', 'utf8');
    res.end(contents);
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
