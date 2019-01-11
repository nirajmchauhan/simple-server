var express = require('express')
const bodyParser = require('body-parser')
var app = express()
const port = 3000

app.use( bodyParser.json() );

app.use(bodyParser.urlencoded({
  extended: true
}));

// respond with "hello world" when a GET request is made to the homepage
app.get('/*', function (req, res) {
  res.send('Done GET')
})

app.post('/*', function (req, res) {
	console.log(req.headers);
	console.log(req.body);
  res.send('Done POST')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
