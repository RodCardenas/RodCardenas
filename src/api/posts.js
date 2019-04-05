var express = require('express');
var router = express.Router();
var queryDB = require("./databaseInterface.js");

router.get('/', function (req, res) {
  queryDB('Select * from post;', req, res);
});

module.exports = router;
