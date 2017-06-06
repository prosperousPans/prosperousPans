const models = require('../../db/models');

module.exports.createGraphDB = (req, res) => {
  models.Connection.forge()
    .where({users_a_id: req.query.id || 2}) //UPDATE THIS AS NEEDED
    .fetchAll()
    .then(a_connection => {
      return a_connection;
    })
    .then(a_connection => {
      models.Connection.forge()
      .where({users_b_id: req.query.id || 2}) //UPDATE THIS AS NEEDED
      .fetchAll()
      .then(b_connection => {
        return [a_connection, b_connection]
      })
      .then(params => {
        models.Users.forge()
        .fetchAll({columns: ['id', 'full_name']})
        .then(users => {
          return [params[0], params[1], users]
        })
        .then(params => {
          res.status(200).send(createGDBQuery(params[0], params[1], params[2]));
        })
      })
    })
}

var createGDBQuery = (a_connection, b_connection, users) => {
  var query = `CREATE (UserA: Users)\n`;
  var users = JSON.parse(JSON.stringify(users))
  var a_connection = JSON.parse(JSON.stringify(a_connection))
  var b_connection = JSON.parse(JSON.stringify(b_connection))
  users.forEach(function(userId) {
    query += (
      `CREATE (a${userId.id}:Users {name: '${userId.full_name}'})\n`
    );
  });
  a_connection.forEach(function(aConnection) {
    query += (
    `CREATE (UserA)-[:Connection {status:['${aConnection.status}']}]->(a${aConnection.users_b_id})\n`
    );
  });
  b_connection.forEach(function(bConnection) {
    query += (
    `CREATE (UserA)<-[:Connection {status:['${bConnection.status}']}]-(a${bConnection.users_a_id})\n`
    );
  });
  query += (`RETURN UserA`)
  return query
}
