var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.get('/', function(req,res){
	res.render('/public/index.html');
})

app.listen(3000,function(){
	console.log('magic happens at 3000');
})