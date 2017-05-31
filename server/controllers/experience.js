const models = require('../../db/models');

module.exports.getAll = (req, res) => {
  models.Experience.fetchAll()
    .then(experience => {
      res.status(200).send(experience);
    })
    .catch(err => {
      // This code indicates an outside service (the database) did not respond in time
      res.status(503).send(err);
    })
};
