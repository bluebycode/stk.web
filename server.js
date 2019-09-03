const express = require("express");
const path = require("path");
const app = express();
 
app.use(express.static('static'));
app.use('/css', express.static(__dirname + '/static/css'));
app.use('/js', express.static(__dirname + '/static/js'));
app.use('/favicon.ico', express.static(__dirname + '/static/favicon.ico'));
app.get('/', function(_, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

var server = app.listen(9999, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});