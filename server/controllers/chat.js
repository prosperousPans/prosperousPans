const knex = require('knex')(require('../../knexfile'));

module.exports.getAll = (req, res) => {
  var auth_id = req.query.authId;
  knex('users')
    .where('auth_id', auth_id)
    .then((data) => {

      var subquery = knex('connection').where('users_a_id', data[0].id).andWhere('status', 'accept').select('users_b_id');
      knex('users')
        .where('id', 'in', subquery)
        .then((data) => {
          res.status(200).send(data);
        })
        .catch(err => {
          console.log("err", err);
          // This code indicates an outside service (the database) did not respond in time
          res.status(503).send(err);
        })



    })
    .catch(err => {
      console.log(err);
      // This code indicates an outside service (the database) did not respond in time
      res.status(503).send(err);
    })
}


module.exports.getUser = (req, res) => {
  var auth_id = req.query.authId;
  knex('users')
    .where('auth_id', auth_id)
    .then((data) => {
      res.status(200).send(data[0]);
    })
    .catch(err => {
      console.log("err", err);
      // This code indicates an outside service (the database) did not respond in time
      res.status(503).send(err);
    })

}


module.exports.getOtherUser = (req, res) => {
  var user = req.query.user;
  knex('users')
    .where('id', user)
    .then((data) => {
      res.status(200).send(data[0]);
    })
    .catch(err => {
      console.log("err", err);
      // This code indicates an outside service (the database) did not respond in time
      res.status(503).send(err);
    })

}
