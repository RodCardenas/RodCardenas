var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator/check');
var databaseInterface = require("./databaseInterface.js");

router.get('/', function (req, res) {
  databaseInterface.get('Select * from post;', req, res);
});

router.post('/', [
  check('title').isLength({ min: 1 }).withMessage('can\'t be empty'),
  check('content').isLength({ min: 1 }).withMessage('can\'t be empty'),
],function (req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  var params = [req.body.title, req.body.content];
  databaseInterface.insert('Insert Into post(title, content) Values($1, $2);', params, req, res);
});

module.exports = router;
