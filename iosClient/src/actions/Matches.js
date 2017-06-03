import axios from 'axios';

function gettingMatches (userID) {
  return {
    type: 'GETTING_MATCHES',
    userID
  }
};

function gotMatches (results) {
  return {
    type: 'GOT_MATCHES',
    results
  }
};

function getMatchesError(getError) {
  return {
    type: 'GET_MATCHES_ERROR',
    getError
  }
}

export function getMatches (userID) {
  return (dispatch) => {
    dispatch(gettingMatches(userID));

    return axios.get('http://localhost:3000/users')
    .then( result => {
      

      const matchArr = result.data;
      // console.log('matchArr', matchArr)
      for (var i=0; i<matchArr.length; i++){
        matchArr[i] = JSON.parse(matchArr[i]);
      }
      dispatch(gotMatches(matchArr));
    })
    .catch( error => {
      dispatch(getMatchesError(error))
    });
  }
};
