require('dotenv').config();
var pgp = require('pg-promise')(/*options*/);
var db = pgp('postgres://' + process.env.DB_CONNECTION_STRING);

module.exports = {

  get: function(query, req, res) {
    db.query(query)
      .then(function(data) {
        return res.status(200).json(data);
      })
      .catch(function(error) {
        return res.status(error.status || 500).json({
          errors: [
            { msg: error.message, location: "query" }
          ],
        });
      });
  },

  insert: function(query, params, req, res) {
    db.query(query, params)
      .then(function(data) {
        return res.status(200).json({
          status: 'success',
          message: 'Post created!',
        });
      })
      .catch(function(error) {
        return res.status(error.status || 500).json({
          errors: [
            { msg: error.message, location: "query" }
          ],
        });
      });
  },
};
