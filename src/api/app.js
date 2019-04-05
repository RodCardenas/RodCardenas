var express = require('express');
var app = express();
var posts = require('./posts');

const port = 5555;

app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/posts', posts);

app.listen(port, () => console.log(`Api listening on port ${port}!`))
