const models = require('../../db/models');

module.exports.insertReason = (req, res) => {
  console.log('INSIDE INSERT REASON POST!!!!')
  console.log(req.body, 'req.body INSERT REASON');
  models.Connection_reason.forge({connection_id: req.body.connection_id, reason_id: req.body.reason_id})
    .save()
    .then(connection => {
      console.log(connection);
      res.status(202).send(connection.attributes.id);
      // res.status(202).send();
    })
}
