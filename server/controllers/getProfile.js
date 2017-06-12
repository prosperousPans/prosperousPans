const models = require('../../db/models');
const knex = require('knex')(require('../../knexfile'));

module.exports.getProfile = (req, res) => {
  models.Users
    .forge()
    .where({id: req.query.id})
    .fetchAll()
    .then(profile => {
      res.status(200).send(profile);
    })
    .catch(err => {
      // This code indicates an outside service (the database) did not respond in time
      res.status(503).send(err);
    })
};

module.exports.postDailyProfiles = (req, res) => {
  knex
  .raw("update users set daily_all_matches = ? where id = ?;", [req.body.daily_all_matches, req.body.id])
  .then(result => {
    res.status(202).send(result);
  });
};