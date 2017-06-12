const models = require('../../db/models');

module.exports.checkMatch = (req, res) => {
  models.Connection
    .forge()
    .where({users_a_id: req.query.users_b_id, users_b_id: req.query.users_a_id, status: 'accept'})
    .fetchAll()
    .then(connection => {
      res.status(200).send(connection);
    })
    .catch(err => {
      // This code indicates an outside service (the database) did not respond in time
      res.status(503).send(err);
    })
};
