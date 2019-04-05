var express = require('express');
var router = express.Router();
var queryDB = require("./databaseInterface.js");

router.get('/', function (req, res) {
  queryDB('Select * from posts;', req, res);
});

module.exports = router;
