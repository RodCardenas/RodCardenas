require('dotenv').config();
var pgp = require('pg-promise')(/*options*/);
var db = pgp('postgres://' + process.env.DB_CONNECTION_STRING);


function queryDB(query, req, res) {
  db.query(query)
    .then(function(data) {
      return res.status(200).json(data);
    })
    .catch(function(error) {
      return res.status(error.status || 500).json({
        status: 'error',
        messsage: error.message,
      });
    });
}

module.exports = queryDB;
