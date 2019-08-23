const mongoose = require("mongoose");
mongoose.set("debug", true);


mongoose.connect("mongodb+srv://test1:test1@cluster0-14rqk.mongodb.net/test?retryWrites=true&w=majority",{
	useNewUrlParser: true,
	useCreateIndex: true
}).then(() => {		
	console.log("connected to DB!");
}).catch(err => {
	console.log("error:", err.message);
});

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");