const models = require('../../db/models');

module.exports.insertConnection = (req, res) => {
  models.Connection.forge({
    users_a_id: req.body.users_a_id,
    users_b_id: req.body.users_b_id,
    status: req.body.status,
    reason: req.body.reason,
  })
    .save()
    .then(result => {
      res.send('Sucessful Response');
    })
}
