var newRelic = require("newrelic")
var bodyParser = require("body-parser")
var express = require("express");
var app = express();

var redirects = []; // In-memory array that's used to store the redirects

app.set("port", (process.env.PORT || 5000));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended:true}))

app.post("/shorten", function(req, res) {

	// If the url isn't shortened yet, create a new entry for it
	if (redirects.indexOf(req.body.link) == -1) {
		redirects.push(req.body.link);
	};

	// Respond with status 200 and the ID for the shortened url
	res.status(200).send(redirects.indexOf(req.body.link).toString()).end();
});

app.get("/", function(req, res) { // Root directory, show empty page
  res.sendStatus(200);
});

app.get("/:id", function(req, res) {

	// If the ID isn't in the array of shortened urls, send 404, otherwise
	// redirect to the original url
	if (typeof redirects[req.params.id] === "undefined") {
		res.sendStatus(404);
	} else {
		res.redirect(redirects[req.params.id]);
	};
});



app.listen(app.get("port"), function() {
  console.log("URL-shortener is running at port:" + app.get("port"));
});
