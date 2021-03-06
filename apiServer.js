var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//API's 
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bookshop');
var Books = require('./models/books.js');

//POST API
app.post('/books',function(req,res){
	var book = req.body;
	Books.create(book,function(err,books){
		if(err)
			throw err;
		res.json(books);
	})
});

//GET API
app.get('/books',function(req,res){
	Books.find(function(err,books){
		if(err)
			throw err;
		res.json(books);
	})
});

//DELETE API
app.delete('/books/:_id',function(req,res){
	var query={_id:req.params._id};

	Books.remove(query,function(err,books){
		if(err)
			throw err;
		res.json(books);
	})
});
//UPDATE API
app.put('/books/_id',function(req,res){
	var book = req.body;
	var query = req.params._id;
	var updateFields = {
		'$set':{
			title:book.title,
			description:book.description,
			image:book.image,
			price:book.price
		}
	};
	var options = {new:true}

	Books.findOneAndUpdate(query,updateFields,options,function(err,books){
		if(err)
			throw err;
		res.json(books);
	})
});

app.listen(3006,function(err){
	if(err){
		return console.log(err);
	}
	console.log('API Server is listening on http://localhost:3006');
});

module.exports = app;
