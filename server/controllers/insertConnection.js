const models = require('../../db/models');

module.exports.insertConnection = (req, res) => {
  models.Connection.forge()
    .save({users_a_id: req.query.users_a_id, users_b_id: req.query.users_b_id, status: req.query.status})
    .then(connection => {
      res.status(202).send();
    })
}
