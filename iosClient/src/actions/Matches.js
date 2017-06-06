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
    console.log('INSIDE MATCHES - ACTION')
    dispatch(gettingMatches(userID));

    axios.get('http://localhost:3000/users')
    .then( result => {
      const matchArr = result.data;
      dispatch(gotMatches(matchArr));

      console.log('matchID!!!!!', matchArr[0][0].id)
      const matchID = matchArr[0][0].id;
      return matchID;
    })
    .then ( matchID => {

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
      .then(axios.spread( function (profExp, eduExp, projExp) {
        // console.log(profExp,'prof')
        // console.log(eduExp,'edu')
        // console.log(projExp,'proj')
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
