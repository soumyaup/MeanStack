var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('advertisers',['advertiser']);

app.use(express.static(__dirname + "/public"));
app.get('/reports',function(req,res) {
	console.log('i received a get request')
	db.advertiser.find(function(err,docs){
		console.log(docs);
		return res.json(docs);
	});
});

app.listen(8080);
console.log('server running on port 8000');
