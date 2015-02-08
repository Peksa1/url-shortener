var express = require("express");
var app = express();

app.set("port", (process.env.PORT || 5000));
app.use(express.static(__dirname + "/public"));

app.get("/", function(request, response) {
  response.send("Hello World!");
});

app.get("/shorten", function(req, res) {
	res.send("1234567");
	console.log(req)
})

app.listen(app.get("port"), function() {
  console.log("Node app is running at localhost:" + app.get("port"));
});
