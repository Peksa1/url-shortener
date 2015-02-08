var express = require("express");
var app = express();
var bodyParser = require("body-parser")

var redirects = [];

app.set("port", (process.env.PORT || 5000));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.get("/:id", function(req, res) {
	res.redirect(301,"http://www.facebook.com")
});

app.post("/shorten", function(req, res) {
	//res.send("1234567");
	console.log(req.body.link)

	if (!link in redirects) {
		redirects.push(link);
	};
	res.send(redirects.indexOf(link));

});

app.listen(app.get("port"), function() {
  console.log("Node app is running at localhost:" + app.get("port"));
});
