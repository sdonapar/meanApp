var express = require('express');
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient
var bodyParser = require('body-parser')

MongoClient.connect("mongodb://localhost:27017/electronics", function(err, db){

	var app = express();
	var phones_col = db.collection('phones')
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());

	app.use(express.static(__dirname + '/public'));

	app.get('/', function(req,res){
		res.render('/public/index.html');
	})

	app.get('/api/phones', function (req,res){
		phones_col.find().toArray( function(err,phones){
			res.json(phones)
		});
	})
	app.get('/api/phones/:phoneId', function (req,res){
		db.collection('phonedetail')
			.find({"_id":req.params.phoneId}).toArray( function(err,phones){
			res.json(phones[0])
		});
	})
	app.listen(3000,function(){
		console.log('magic happens at 3000');
	});
})