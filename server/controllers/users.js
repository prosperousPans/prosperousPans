const models = require('../../db/models');

module.exports.getAll = (req, res) => {
  models.Users.fetchAll()
    .then(users => {
      res.status(200).send(users);
    })
    .catch(err => {
      // This code indicates an outside service (the database) did not respond in time
      res.status(503).send(err);
    })
  // res.send('Hello getAll');
};
