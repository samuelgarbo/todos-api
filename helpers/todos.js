const db = require("../models");


exports.getTodos = function(req, res){
		db.Todo.find()
	.then(function(todos){
		res.json(todos);
	})
	.catch(function(err){
		res.send(err);
	})
};

exports.createTodo = function(req, res){
	db.Todo.create(req.body)
	.then(function(newtodo){
		res.status(201).json(newtodo);
	})
	.catch(function(err){
		console.log(err);
	})
};

exports.deleteTodo =  function(req, res){
	db.Todo.deleteOne({_id: req.params.todoId})
	.then(function(){
		res.json({message: "deleted"});
	})
	.catch(function(){
		console.log();
	})
};

exports.updateTodo = function(req, res){
	db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
	.then(function(todo){
		res.json(todo);
	})
	.catch(function(err){
		console.log(err);
	})
};

exports.getTodo = function(req, res){
	db.Todo.findById(req.params.todoId)
	.then(function(foundTodo){
		res.json(foundTodo);
	})
	.catch(function(err){
		console.log(err);
	})	
};
	
module.exports = exports;
