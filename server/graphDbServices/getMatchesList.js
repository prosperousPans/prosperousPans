const axios = require('axios');
const Promise = require('bluebird');

module.exports.getMatches = (req, res) => {

  var matchArray = [];
  var hash = {'null': true};
  var possibleMatch = [];


  var getPrioirtyMatch = function () {
    possibleMatch = [];
    return new Promise(function(resolve, reject) {
      axios.get('http://localhost:3000/priority-recommendation')
      .then(function(response) {
        if ( response.data !== null ) {
          possibleMatch[0] = Number(response.data[0][1]);
        } else {
          possibleMatch[0] = null;
        }
        // console.log('1', possibleMatch
        resolve(possibleMatch);
      })
    })
  }

  var getRecommendMatch = function (possibleMatch) {
    return new Promise(function(resolve, reject) {
      axios.get('http://localhost:3000/recommendation')
      .then(function(response) {
        if ( response.data !== null ) {
          possibleMatch[1] = Number(response.data[0][1]);
        } else {
          possibleMatch[1] = null;
        }
        // console.log('2', possibleMatch)
        resolve(possibleMatch);
      })
    })
  }

  var getRandomMatch = function (possibleMatch) {
    return new Promise(function(resolve, reject) {
      axios.get('http://localhost:3000/users')
      .then(function(response) {
        possibleMatch[2] = response.data.id;
        // console.log('3', possibleMatch)
        resolve(possibleMatch);
      })
    })
  }


  var doAll = function (possibleMatch) {
    return new Promise(function(resolve, reject) {
      // console.log('pp', possibleMatch)
      if ( possibleMatch[0] !== null ) {
        if ( hash[String(possibleMatch[0])] !== true ) {
          matchArray.push([possibleMatch[0], 1]);
          hash[String(possibleMatch[0])] = true;
          // console.log('m1', matchArray);
        }
      } else if ( possibleMatch[1] !== null ) {
        if ( hash[String(possibleMatch[1])] !== true ) {
          matchArray.push([possibleMatch[1], 2]);
          hash[String(possibleMatch[1])] = true;
          // console.log('m2', matchArray);
        }
      } else if ( hash[String(possibleMatch[2])] !== true ) {
        matchArray.push([possibleMatch[2], 3]);
        hash[String(possibleMatch[2])] = true;
        // console.log('m3', matchArray);
      }
      console.log('MATCHED', matchArray)
      resolve(matchArray);
      })
  }
// while ( matchArray.lenght < 5 ) {
    getPrioirtyMatch()
      .then(function(possibleMatch) {
        // console.log('res1', possibleMatch)
        return getRecommendMatch(possibleMatch);
      })
      .then(function (possibleMatch) {
        // console.log('res2', possibleMatch)
        return getRandomMatch(possibleMatch);
      })
      .then(function (possibleMatch) {
        // console.log('res3', possibleMatch)
        return doAll(possibleMatch)
      })
      .then(function (possibleMatch) {
        return getPrioirtyMatch(possibleMatch);
      })
      .then(function(possibleMatch) {
        // console.log('res1', possibleMatch)
        return getRecommendMatch(possibleMatch);
      })
      .then(function (possibleMatch) {
        // console.log('res2', possibleMatch)
        return getRandomMatch(possibleMatch);
      })
      .then(function (possibleMatch) {
        // console.log('res3', possibleMatch)
        return doAll(possibleMatch)
      })
      .then(function (possibleMatch) {
        return getPrioirtyMatch(possibleMatch);
      })
      .then(function(possibleMatch) {
        // console.log('res1', possibleMatch)
        return getRecommendMatch(possibleMatch);
      })
      .then(function (possibleMatch) {
        // console.log('res2', possibleMatch)
        return getRandomMatch(possibleMatch);
      })
      .then(function (possibleMatch) {
        // console.log('res3', possibleMatch)
        return doAll(possibleMatch)
      })
      .then(function (possibleMatch) {
        return getPrioirtyMatch(possibleMatch);
      })
      .then(function(possibleMatch) {
        // console.log('res1', possibleMatch)
        return getRecommendMatch(possibleMatch);
      })
      .then(function (possibleMatch) {
        // console.log('res2', possibleMatch)
        return getRandomMatch(possibleMatch);
      })
      .then(function (possibleMatch) {
        // console.log('res3', possibleMatch)
        return doAll(possibleMatch)
      })
      .then(function (possibleMatch) {
        return getPrioirtyMatch(possibleMatch);
      })
      .then(function(possibleMatch) {
        // console.log('res1', possibleMatch)
        return getRecommendMatch(possibleMatch);
      })
      .then(function (possibleMatch) {
        // console.log('res2', possibleMatch)
        return getRandomMatch(possibleMatch);
      })
      .then(function (possibleMatch) {
        // console.log('res3', possibleMatch)
        return doAll(possibleMatch)
      })
      .then(function (possibleMatch) {
        return getPrioirtyMatch(possibleMatch);
      })
      .then(function(possibleMatch) {
        // console.log('res1', possibleMatch)
        return getRecommendMatch(possibleMatch);
      })
      .then(function (possibleMatch) {
        // console.log('res2', possibleMatch)
        return getRandomMatch(possibleMatch);
      })
      .then(function (possibleMatch) {
        // console.log('res3', possibleMatch)
        return doAll(possibleMatch)
      })
      .then(function (possibleMatch) {
        return getPrioirtyMatch(possibleMatch);
      })
      .then(function(possibleMatch) {
        // console.log('res1', possibleMatch)
        return getRecommendMatch(possibleMatch);
      })
      .then(function (possibleMatch) {
        // console.log('res2', possibleMatch)
        return getRandomMatch(possibleMatch);
      })
      .then(function (possibleMatch) {
        // console.log('res3', possibleMatch)
        return doAll(possibleMatch)
      })
      .then(function (possibleMatch) {
        return getPrioirtyMatch(possibleMatch);
      })
      .then(function(possibleMatch) {
        // console.log('res1', possibleMatch)
        return getRecommendMatch(possibleMatch);
      })
      .then(function (possibleMatch) {
        // console.log('res2', possibleMatch)
        return getRandomMatch(possibleMatch);
      })
      .then(function (possibleMatch) {
        // console.log('res3', possibleMatch)
        return doAll(possibleMatch)
      })
      .then(function (possibleMatch) {
        return getPrioirtyMatch(possibleMatch);
      })
      .then(function(possibleMatch) {
        // console.log('res1', possibleMatch)
        return getRecommendMatch(possibleMatch);
      })
      .then(function (possibleMatch) {
        // console.log('res2', possibleMatch)
        return getRandomMatch(possibleMatch);
      })
      .then(function (possibleMatch) {
        // console.log('res3', possibleMatch)
        return doAll(possibleMatch)
      })
      .then(function (possibleMatch) {
        return getPrioirtyMatch(possibleMatch);
      })
      .then(function(possibleMatch) {
        // console.log('res1', possibleMatch)
        return getRecommendMatch(possibleMatch);
      })
      .then(function (possibleMatch) {
        // console.log('res2', possibleMatch)
        return getRandomMatch(possibleMatch);
      })
      .then(function (possibleMatch) {
        // console.log('res3', possibleMatch)
        return doAll(possibleMatch)
      })
      .then(function (possibleMatch) {
        return getPrioirtyMatch(possibleMatch);
      })
      .then(function(possibleMatch) {
        // console.log('res1', possibleMatch)
        return getRecommendMatch(possibleMatch);
      })
      .then(function (possibleMatch) {
        // console.log('res2', possibleMatch)
        return getRandomMatch(possibleMatch);
      })
      .then(function (possibleMatch) {
        // console.log('res3', possibleMatch)
        return doAll(possibleMatch)
      })
      .then(function (possibleMatch) {
        return getPrioirtyMatch(possibleMatch);
      })
      .then(function(possibleMatch) {
        // console.log('res1', possibleMatch)
        return getRecommendMatch(possibleMatch);
      })
      .then(function (possibleMatch) {
        // console.log('res2', possibleMatch)
        return getRandomMatch(possibleMatch);
      })
      .then(function (possibleMatch) {
        // console.log('res3', possibleMatch)
        return doAll(possibleMatch)
      })


    .then(function (matchArray) {
      // console.log('HASH', hash)
      // if ( matchArray.length > 5 ) {
        res.send(matchArray)
      // }
    })
  // }

}
