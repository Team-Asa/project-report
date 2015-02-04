var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.sendfile('index.html');
});

app.listen(process.env.PORT || 4000);
