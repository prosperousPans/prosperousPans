const models = require('../../db/models');

module.exports.getAll = (req, res) => {
  models.Users.fetchAll()
    .then(users => {
      var jsonUsers = JSON.parse(JSON.stringify(users));
      var count = 0;
      var hash = {};
      var result = [];
      //FIND USER A ID FROM REQ
      var userA_Id = 1;
      while ( count < 20 || result.length <= 2 ) {
        count++;
        // makes sure not to choose the same random number
        var randIdx = Math.floor(Math.random() * jsonUsers.length);
        // while ( hash.String(randIdx) ) {
        //   randIdx = Math.floor(Math.rand() * jsonUsers.length);
        // }
        var userB_id = jsonUsers[randIdx].id;
        models.Connection.query().where({users_a_id: userA_Id}).andWhere({users_b_id: jsonUsers[randIdx].id}).fetchOne()
          .then(connection) => {}
        console.log(models.Connection.query().where({users_a_id: userA_Id}).andWhere({users_b_id: jsonUsers[randIdx].id}).fetchOne());
        if ( !(models.Connection.query().where({user_a_id: userA_Id}).andWhere({user_b_id: jsonUsers[randIdx].id}).fetchOne) ) {
          result.push(jsonUsers[randIdx]);
          hash.String(randIdx) = true;
        }
        console.log(result);
      }
      res.status(200).send('asdasd');
    })
    .error(err => {
      console.error('ERROR: failed to retrieve users data')
    })

    .catch(err => {
      // This code indicates an outside service (the database) did not respond in time
      res.status(503).send(err);
    })
  // res.send('Hello getAll');
};
