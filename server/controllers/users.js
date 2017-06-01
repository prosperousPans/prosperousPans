const models = require('../../db/models');

module.exports.getAll = (req, res) => {
  models.Users.fetchAll()
    .then(users => {
      var found = false;
      var count = 0;
      var hash = {};
      var result = [];
      //FIND USER A ID FROM REQ
      var userA_Id = req.query.id || 1;
      while ( found === false || count < 20 || result.length < 3 ) {
        count++;
        // makes sure not to choose the same random number
        var randIdx = Math.floor(Math.rand() * users.length);
        while ( hash.String(randIdx) ) {
          randIdx = Math.floor(Math.rand() * users.length);
        }
        var userb_id = users[randIdx].id;
        models.Connection.query(function(qb) {
          qb.where('user_a_id', '=', 'userA_ID').andWhere('user_b_id' '=')
        }
        if ( models.Connection.query().where({user_a_id: userA_Id}).andWhere({user_b_id: users[randIdx].id}) {
          result.push(users[randIdx]);
          hash.String(randIdx) = true;
        }
      }
      res.status(200).send(users[randIdx]);
    })
    .error(err => {
      console.error('ERROR: failed to retrieve users data')
    })
      // res.status(200).send(users);
    })
    .catch(err => {
      // This code indicates an outside service (the database) did not respond in time
      res.status(503).send(err);
    })
  // res.send('Hello getAll');
};

module.exports.getNew = (req, res) => {
  models.Co
}
