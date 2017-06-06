const models = require('../../db/models');

module.exports.populateFullGraphDB = (req, res) => {
  models.Users.forge()
    .fetchAll({columns: ['id', 'full_name']})
    .then(users => {
      return users;
    })
    .then(params => {
    models.Connection.forge()
      .fetchAll({columns: ['users_a_id', 'users_b_id', 'status']})
      .then(connection => {
        return [params, connection];
      })
      .then(params => {
      models.Experience.forge()
        .fetchAll({columns: ['users_id', 'name', 'role']})
        .then(experience => {
          return [params[0], params[1], experience];
        })
        .then(params => {
          res.status(200).send(createGDBQuery(params[0], params[1], params[2]));
        })
      })
    })
}

var createGDBQuery = (users, connections, experience) => {
  var query = '';
  // `CREATE (UserA: Users)\n`;
  var users = JSON.parse(JSON.stringify(users))
  var connection = JSON.parse(JSON.stringify(connections))
  var experience = JSON.parse(JSON.stringify(experience))
  console.log(experience);
  users.forEach(function(userId) {
    query += (
      `CREATE (a${userId.id}:Users {name: '${userId.full_name}'})\n`
    );
  });
  connection.forEach(function(conn) {
    query += (
    `CREATE (UserA)-[:Connection {status:['${aConnection.status}']}]->(a${aConnection.users_b_id})\n`
    );
  })
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
