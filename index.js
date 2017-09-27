'use strict';
var express        = require('express'),
    bodyParser     = require('body-parser'),
    http           = require('http'),
    app            = express();

app.use(bodyParser.json());

// set port
app.set('port', process.env.PORT || 8080);

// create a health check endpoint
app.get('/health', function(req, res) {
  res.send('okay');
});

app.post('/fb',  function(req,res){
  res.send(req.body)
})

// start the server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});