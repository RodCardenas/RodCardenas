var express = require('express');
var app = express();
var posts = require('./posts');

const port = 5555;

app.use('/posts', posts);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
