import { combineReducers } from 'redux';
import Matches from './Matches.js';
import Pursume from './Pursume.js';

const appReducer = combineReducers({
  Matches,
  Pursume
});


const rootReducer = (state, action) => {
  return appReducer(state, action);
}

export default rootReducer;