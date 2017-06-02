const models = require('../../db/models');

module.exports.getNewUsers = (req, res) => {
  models.Users.fetchAll()
    .then(users => {
      var jsonUsers = JSON.parse(JSON.stringify(users));
      var numOfUsers = jsonUsers.length;
      return numOfUsers
    })
    .then(numOfUsers => {
      // update these
      var userA_Id = 4;
      var maxCount = 10;
      var numOfMatchesReturned = 4

      var count = 0;
      var sent = false;
      var result = [];
      var hashCheck = {};

      while ( count < maxCount ) {
        count++;
        models.Users.fetchAll()
          .then(users => {
            hashCheck[String(userA_Id)] = true;
            var randIdx = Math.floor(Math.random() * numOfUsers);
            while ( hashCheck[String(randIdx + 1)] === true ) {
              randIdx = Math.floor(Math.random() * numOfUsers);
            }
            var jsonUsers = JSON.parse(JSON.stringify(users));
            hashCheck[String(randIdx + 1)] = true;
            var userB_id = jsonUsers[randIdx].id;
            // returns these as params in next function:
            return [userB_id, randIdx, jsonUsers]
          })
          .then(params => {
            models.Connection.forge()
            .where({users_a_id: userA_Id, users_b_id: params[0]})
            .fetchAll()
              .then(connection => {
                if ( JSON.parse(JSON.stringify(connection)).length === 0 ) {
                  result.push(JSON.stringify(params[2][params[1]]));
                };
                if ( result.length === numOfMatchesReturned && sent === false) {
                  sent = true
                  console.log('SENT');
                  console.log(typeof result);
                  res.status(200).send(result);
                }
              })
          })
          .error(err => {
            console.error('ERROR: failed to retrieve connections data')
          })
      }
    })
};
