const models = require('../../db/models');
const knex = require('knex')(require('../../knexfile'));

module.exports.getConnect = (req, res) => {
  models.Connection
    .forge()
    .where({users_b_id: 4})
    // .count()
    .fetchAll()
    .then(connection => {
      res.status(200).send(connection);
    })
    .catch(err => {
      // This code indicates an outside service (the database) did not respond in time
      res.status(503).send(err);
    })
};

module.exports.getAccept = (req, res) => {
  models.Connection
    .forge()
    .where({users_b_id: 4, status:'accept'})
    // .count()
    .fetchAll()
    .then(connection => {
      res.status(200).send(connection);
    })
    .catch(err => {
      // This code indicates an outside service (the database) did not respond in time
      res.status(503).send(err);
    })
};

module.exports.getReason = (req, res) => {
  knex
  .raw("select reason from connection where users_b_id = 4 and status='accept' group by reason order by count(*) desc limit 1;")
  .then(result => {
    // console.log('result raw', result.rows[0].reason)
    let topReason = result.rows[0].reason;
    res.send(topReason)
  });
  // knex.raw('SELECT * FROM MyTable WHERE id = ?', [myId])
};

module.exports.getVertical = (req, res) => {
  knex
  .raw("select vertical from users where id in (select users_a_id from connection where users_b_id = 4 and status='accept') group by vertical order by count(*) desc limit 1;")
  .then(result => {
    console.log('result raw', result.rows[0].vertical)
    let topVertical = result.rows[0].vertical;
    res.send(topVertical)
  });
  // knex.raw('SELECT * FROM MyTable WHERE id = ?', [myId])
};
