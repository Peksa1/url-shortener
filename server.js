var express = require('express')
var app = express()

app.get('/', function (req, res) {
	console.log("get request:" + req)
  res.send('Hello World!')
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('URL-shortener listening at http://%s:%s', host, port)

})