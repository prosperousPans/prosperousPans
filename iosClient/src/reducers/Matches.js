const initialState = {
  gettingMatches: null,
  allMatches: null,
  getMatchesError: null,
  gettingMatches: null
};

const Matches = (state = initialState, action) => {
  switch(action.type) {
    case 'GETTING_MATCHES':
      return {
        ...state,
        gettingMatches: true
      }
    case 'GOT_MATCHES':
      return {
        ...state,
        allMatches: action.results,
        gettingMatches: false        
      }
    case 'GET_MATCHES_ERROR':
      return {
        ...state,
        getMatchesError: action.getError,
        gettingMatches: false
      }
    default:
      return state;
  }
};

export default Matches; 