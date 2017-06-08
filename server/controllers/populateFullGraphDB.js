const models = require('../../db/models');

module.exports.populateFullGraphDB = (req, res) => {
  models.Users.forge()
    .fetchAll({columns: ['id', 'full_name']})
    .then(users => {
      return users;
    })
    .then(params => {
    models.Connection.forge()
      .fetchAll({columns: ['users_a_id', 'users_b_id', 'status', 'reason']})
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
        models.Users_tag.forge()
          .fetchAll({columns: ['users_id', 'tag_id']})
          .then(users_tag => {
            return [params[0], params[1], params[2], users_tag];
          })
          .then(params => {
          models.Tag.forge()
            .fetchAll()
            .then(tag => {
              return [params[0], params[1], params[2], params[3], tag];
            })
            .then(params => {
              res.status(200).send(createGDBQuery(params[0], params[1], params[2], params[3], params[4]));
            })
          })
        })
      })
    })
}

var createGDBQuery = (users, connections, experience, users_tag, tag) => {
  var query = '';

  var users = JSON.parse(JSON.stringify(users))
  var connection = JSON.parse(JSON.stringify(connections))
  var experience = JSON.parse(JSON.stringify(experience))
  var users_tag = JSON.parse(JSON.stringify(users_tag))
  var tag = JSON.parse(JSON.stringify(tag))
  users.forEach(function(user) {
    var expHolder = {};
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
    var tagHolder = [];
    users_tag.forEach(function(uTags) {
      if ( uTags.users_id === user.id ) {
        tag.forEach(function(t) {
          if ( t.id === uTags.tag_id) {
            tagHolder.push(`'${t.name}'`);
          }
        });
      }
    });
    query += (
      `CREATE (a${user.id}:Users {name: '${user.full_name}', tags: [${tagHolder}], education_role: '${expHolder.education}', professional_role: '${expHolder.professional}', projects_role: '${expHolder.projects}'})\n`
    );
  });
  connection.forEach(function(conn) {
    query += (
    `CREATE (a${conn.users_a_id})-[:Connection {status:['${conn.status}'], reason: ['${conn.reason}']}]->(a${conn.users_b_id})\n`
    );
  });
  return query
}
