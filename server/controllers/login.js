const knex = require('knex')(require('../../knexfile'));

module.exports.addUser = (req, res) => {

// console.log("~~~~~~~~", req.headers);

  knex
  .raw("insert into users (auth_id, full_name) select ?, ? where not exists (select 1 from users where auth_id=?);", [req.body.authid, req.body.nickname, req.body.authid])
  .then(result => {
    res.status(202).send(result);
  });
};