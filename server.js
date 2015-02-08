var newrelic = require("newrelic")
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
	console.log(redirects);
	console.log();

	if (typeof redirects[req.params.id] === "undefined") {
		res.sendStatus(404);
	} else {
		res.redirect(redirects[req.params.id]);
	};
});

app.post("/shorten", function(req, res) {
	console.log(req.body.link);

	if (redirects.indexOf(req.body.link) == -1) {
		redirects.push(req.body.link);
		console.log("Link not found, created new link at #" + redirects.indexOf(req.body.link));
	};
	res.status(200).send(redirects.indexOf(req.body.link).toString()).end();
	console.log("Sent redirect-id " + redirects.indexOf(req.body.link));
});

app.listen(app.get("port"), function() {
  console.log("Node app is running at localhost:" + app.get("port"));
});
