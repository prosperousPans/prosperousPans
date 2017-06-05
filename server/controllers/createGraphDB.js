const models = require('../../db/models');

module.exports.createGraphDB = (req, res) => {
  models.Connection.forge()
    .where({users_a_id: req.query.id || 1}) //UPDATE THIS AS NEEDED
    .fetchAll()
    .then(a_connection => {
      return a_connection;
    })
    .then(a_connection => {
      models.Connection.forge()
      .where({users_b_id: req.query.id || 1}) //UPDATE THIS AS NEEDED
      .fetchAll()
      .then(b_connection => {
        return [a_connection, b_connection]
      })
      .then(params => {
        res.status(200).send(params);
      })
    })
}

var createGDBQuery = (a_connection, b_connection) => {
  var query = '';
  a_connection.forEach(function(aConnection) {
    `CREATE
      (:UserA)-[:Connection {status: }]`
  })
}

// CREATE (a: Users)-[:Accept]
