const models = require('../../db/models');

module.exports.getAll = (req, res) => {
  var count = 0;
  var userA_Id = 1;
  var result = [];
  while ( count < 20 ) {
    count++;
    models.Users.fetchAll()
      .then(users => {
        var jsonUsers = JSON.parse(JSON.stringify(users));
        var randIdx = Math.floor(Math.random() * jsonUsers.length);
        var userB_id = jsonUsers[randIdx].id;
        console.log(userB_id);
        return [userB_id, randIdx, jsonUsers]
      })
      .then(params => {
        models.Connection.forge()
        .where({users_a_id: userA_Id, users_b_id: params[0]})
        .fetchAll()
          .then(connection => {
            var jsonConnection = JSON.parse(JSON.stringify(connection));
            console.log(jsonConnection);
            if ( jsonConnection.length === 0 ) {
              result.push(JSON.stringify(params[2][params[1]]));
            };
            if ( result.length === 5 ) {
              console.log('SENT')
              res.status(200).send(result);
            }
          })
      })
      .error(err => {
        console.error('ERROR: failed to retrieve connections data')
      })

  }
};


// module.exports.getAll = (req, res) => {
//   models.Users.fetchAll()
//     .then(users => {
//       var jsonUsers = JSON.parse(JSON.stringify(users));
//       var count = 0;
//       var hash = {};
//       var result = [];
//       //FIND USER A ID FROM REQ
//       var userA_Id = 1;
//       while ( count < 5 ) {
//         count++;
//         // makes sure not to choose the same random number
//         var randIdx = Math.floor(Math.random() * jsonUsers.length);
//         var userB_id = jsonUsers[randIdx].id;
//         // while ( hash.String(randIdx) ) {
//         //   randIdx = Math.floor(Math.rand() * jsonUsers.length);
//         // }
//         // result.push(randIdx)
//         console.log(userB_id)
//         // fetchUsers.on('fetching')
//         models.Connection.forge()
//         .where({users_a_id: userA_Id, users_b_id: userB_id})
//         .fetchAll()
//           .then(connection => {
//             var jsonConnection = JSON.parse(JSON.stringify(connection))
//             console.log(typeof jsonUsers[randIdx])
//             console.log('json', jsonUsers[randIdx])
//             if ( jsonConnection.length === 0 ) {
//               console.log('CONNECTION', typeof JSON.stringify(jsonUsers[randIdx]))
//               result.push(JSON.stringify(jsonUsers[randIdx]))
//             }
//             console.log('RESULT111111111', result)
//             console.log('RESULT111111111', result.length)
//           })
//           .error(err => {
//             console.error('ERROR: failed to retrieve connections data')
//           })
//           console.log('RESULT111111111', result)
//           console.log('RESULT111111111', result.length)
//         }
//         console.log('RESULT', result)
//         // res.status(200).send('asdasd');
//
//           // }
//       //   console.log(models.Connection.query().where({users_a_id: userA_Id}).andWhere({users_b_id: jsonUsers[randIdx].id}).fetchOne());
//       //   if ( !(models.Connection.query().where({user_a_id: userA_Id}).andWhere({user_b_id: jsonUsers[randIdx].id}).fetchOne) ) {
//       //     result.push(jsonUsers[randIdx]);
//       //     hash.String(randIdx) = true;
//       //   }
//       //   console.log(result);
//       // console.log('RESULT', result)
//
//     // console.log(result)
//   })
//     .error(err => {
//       console.error('ERROR: failed to retrieve users data')
//     })
//
//     .catch(err => {
//       // This code indicates an outside service (the database) did not respond in time
//       res.status(503).send(err);
//   })
//   // res.send('Hello getAll');
// };
