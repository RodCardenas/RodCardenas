var express = require('express');
var app = express();
var fs = require('fs');
var https = require('https');

var posts = require('./posts');

const port = 5555;

app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/posts', posts);

const privateKey = fs.readFileSync('/etc/letsencrypt/live/www.rodcardenas.xyz/privkey.pem').toString();
const certificate = fs.readFileSync('/etc/letsencrypt/live/www.rodcardenas.xyz/fullchain.pem').toString();

https.createServer({
  key: privateKey,
  cert: certificate
}, app).listen(port, () => console.log(`Api listening on port ${port}!`))
