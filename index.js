const express = require("express"),
	  app = express(),
	  todoRoutes = require("./routes/todos"),
	  bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
		res.sendFile("index.html");
		})

app.use("/api/todos", todoRoutes);

app.listen(3000, function(){
	console.log("app is running");
})

