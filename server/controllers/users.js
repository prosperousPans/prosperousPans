const models = require('../../db/models');

module.exports.getNewUsers = (req, res) => {
  let result = null;
  models.Users.fetchAll()
    .then(users => {
      let jsonUsers = JSON.parse(JSON.stringify(users));
      let numOfUsers = jsonUsers.length;
      return numOfUsers
    })
    .then(numOfUsers => {
      let userA_id = 2;
      let maxCount = 10; //try 10 times max - cap on while loop
      let numOfMatchesToReturn = 1

      let count = 0;
      let sent = false;
      // let result = null;
      let hashCheck = {};

      while ( count < maxCount ) {
        count++;
        models.Users.fetchAll()
          //function to find a random user
          .then(users => {

            hashCheck[String(userA_id)] = true;

            // USE BOOKSHELF METHOD SERIALIZE INSTEAD OF JSON!
            let jsonUsers = JSON.parse(JSON.stringify(users));

            let randIdx = Math.floor(Math.random() * numOfUsers);
            while ( hashCheck[String(randIdx + 1)] === true ) {
              randIdx = Math.floor(Math.random() * numOfUsers);
            }
            let userB_id = jsonUsers[randIdx].id;

            return {userB_id: userB_id, userB_idx: randIdx, allUsers: jsonUsers}
          })

          //function to see if random userB can be a new connection
          .then( ( {userB_id , userB_idx, allUsers} ) => {
            models.Connection.forge()
              .where( { users_a_id: userA_id, users_b_id: userB_id } )
              .fetchAll()
              .then(connection => {
                if ( JSON.parse(JSON.stringify(connection) ).length === 0 ) {
                  result = allUsers[userB_idx];
                  if ( result && sent === false) {
                    sent = true
                    res.status(200).send(result);
                  }
                }
              })
              .error(err => {
                console.error('ERROR: failed to retrieve connections data')
              })
          })
          .error(err => {
            console.error('ERROR: failed to retrieve all users data')
          })
      }
    })
    return result;
};
