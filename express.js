var express = require("express"),
	http=require("http"),
	app=express();
// Create our Express-powered HTTP server
http.createServer(app).listen(3000);
//add routing
app.get("/*", function (req, res) {
	  
});