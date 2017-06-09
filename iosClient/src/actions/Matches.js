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

function gotProfessionalExp (profExp) {
  return {
    type: 'GOT_PROFESSIONAL_EXP',
    profExp
  }
};

function gotEducationExp (eduExp) {
  return {
    type: 'GOT_EDUCATION_EXP',
    eduExp
  }
};

function gotProjectExp (projExp) {
  return {
    type: 'GOT_PROJECT_EXP',
    projExp
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

    axios.get('http://localhost:3000/users', {params: {userA_id: '_USERIDHERE'}})
    .then( result => {
      const matchObj = result.data;
      dispatch(gotMatches(matchObj));

      const matchID = matchObj.id;
      return matchID;
    })
    .then ( matchID => {
      console.log('MATCH ID - matches.js', matchID);
      axios.all([
        axios.get('http://localhost:3000/experience', {
          params: {name: 'professional', users_id: matchID}
        }),
        axios.get('http://localhost:3000/experience', {
          params: {name: 'education', users_id: matchID}
        }),
        axios.get('http://localhost:3000/experience', {
          params: {name: 'projects', users_id: matchID}
        })
      ])
      .then(axios.spread( (profExp, eduExp, projExp) => {
        dispatch(gotProfessionalExp(profExp));
        dispatch(gotEducationExp(eduExp));
        dispatch(gotProjectExp(projExp));
      }))
    })          
    .catch( error => {
      dispatch(getMatchesError(error))
    });
  }
};
