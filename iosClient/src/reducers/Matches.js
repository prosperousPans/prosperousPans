const initialState = {
  gettingMatches: null,
  allMatches: null,
  professionalExp: null,
  educationExp: null,
  projectExp: null,
  getMatchesError: null
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
        gettingMatches: true
      }
    case 'GOT_PROFESSIONAL_EXP':
      return {
        ...state,
        professionalExp: action.profExp,
        gettingMatches: true        
      }  
    case 'GOT_EDUCATION_EXP':
      return {
        ...state,
        educationExp: action.eduExp,
        gettingMatches: true        
      }  
    case 'GOT_PROJECT_EXP':
      return {
        ...state,
        projectExp: action.projExp,
        gettingMatches: true        
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