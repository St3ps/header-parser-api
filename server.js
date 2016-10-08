var express = require('express');
var app = express();
var utils = require('./utils.js');

app.get('/', function(req, res) {
    
    var reqhdr = utils.formatHeader(req.headers);

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(reqhdr));

    
});



app.listen(process.env.PORT, function () {
    
    console.log('header parser app listening on port', process.env.PORT + '!');
})
