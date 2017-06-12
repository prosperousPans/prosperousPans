const models = require('../../db/models');
const knex = require('knex')(require('../../knexfile'));


module.exports.getUserDetails = (req, res) => {
  console.log('from getUserDetails', req.headers)
  var authid = req.query.authid.replace('|', '%7C')
  knex('users')
    .where('auth_id', authid)
    .then((data) => {
      res.status(200).send(data[0]);
    })
    .catch(err => {
      console.log("err", err);
      res.status(503).send(err);
    })
};

module.exports.getUserTags = (req, res) => {
  var authid = req.query.authid.replace('|', '%7C')
  knex('users_tag')
    .join('tag as t', 't.id', 'users_tag.tag_id')
    .join('users as u', 'u.id', 'users_tag.users_id')
    .where('u.auth_id', authid)
    .select('t.name as tag')
    .then(tags => {
        res.status(200).send(tags);
    })
    .catch(err => {
      console.log("err", err);
      res.status(503).send(err);
    })
};

module.exports.getUserExperience = (req, res) => {
  var authid = req.query.authid.replace('|', '%7C')
  knex('experience')
    .join('users as u', 'u.id', 'experience.users_id')
    .where('u.auth_id', authid)
    .select('name', 'role', 'description', 'organization', 'start_date', 'end_date')
    .then(experience => {
        res.status(200).send(experience);
    })
    .catch(err => {
      console.log("err", err);
      res.status(503).send(err);
    })
};

module.exports.addTag = (req, res) => {
  knex
  .raw("insert into users_tag (users_id, tag_id) values ((select id from users where auth_id = ?), (select id from tag where name = ?));", [req.body.authid, req.body.text])
  .then(result => {
    res.status(202).send(result);
  });
};

module.exports.deleteTag = (req, res) => {
  knex
  .raw("delete from users_tag where users_id = (select id from users where auth_id = ?) and tag_id = (select id from tag where name = ?);", [req.body.authid, req.body.tag])
  .then(result => {
    res.status(202).send(result);
  });
};

module.exports.addSummary = (req, res) => {
  knex
  .raw("update users set summary = ? where id = (select id from users where auth_id = ?);", [req.body.text, req.body.authid])
  .then(result => {
    res.status(202).send(result);
  });
};

module.exports.updateIndustry = (req, res) => {
  console.log('in update Industry', req.body)
  knex
  .raw("update users set vertical = ? where id = (select id from users where auth_id = ?);", [req.body.industry, req.body.authid])
  .then(result => {
    console.log('result raw', result)
    res.status(202).send(result);
  });
};
