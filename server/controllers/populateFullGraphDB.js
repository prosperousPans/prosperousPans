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
  users.forEach(function(user) {
    var expHolder = {};
    // expArray = [];
    experience.forEach(function(exp) {
      if ( exp.users_id === user.id ) {
        if ( exp.name === 'education' ) {
          expHolder.education = exp.role
        }
        if ( exp.name === 'professional' ) {
          expHolder.professional = exp.role
        }
        if ( exp.name === 'projects' ) {
          expHolder.projects = exp.role
        }
      }
    });
    query += (
      `CREATE (a${user.id}:Users {name: '${user.full_name}', education_role: '${expHolder.education}', professional_role: '${expHolder.professional}', projects_role: '${expHolder.projects}'})\n`
    );
  });
  connection.forEach(function(conn) {
    query += (
    `CREATE (a${conn.users_a_id})-[:Connection {status:['${conn.status}']}]->(a${conn.users_b_id})\n`
    );
  });
  return query
}
