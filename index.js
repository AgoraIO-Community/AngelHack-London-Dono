var http = require('http');
var express = require('express');
var favicon = require('serve-favicon');

var PORT = process.env.PORT || 8080;
var APP_ID = '4eae63ee4a934c4c9731fd845ba65039';

var app = express();
app.disable('x-powered-by');
app.set('port', PORT);
app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(express.static(__dirname + '/public'));

app.get('/app_id', function(req, res){
    if (!APP_ID){
        res.send(500, {
            error: "No APP_ID"
        });
    }
    res.send(APP_ID)
})

http.createServer(app).listen(app.get('port'), function() {
 	console.log('Agora WebRTC Communications Demo starts at ', app.get('port'));
});