const models = require('../../db/models');

module.exports.insertConnection = (req, res) => {
  models.Connection.forge({users_a_id: req.body.users_a_id, users_b_id: req.body.users_b_id, status: req.body.status})
    .save()
    .then(connection => {
      console.log('CONNECTION ID', connection.attributes.id)
      res.json(connection.attributes.id);
    })
}
