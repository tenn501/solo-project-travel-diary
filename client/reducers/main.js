import { combineReducers } from 'redux';
import Reducer from './Reducer';

const reducer = combineReducers({
  // if we had other reducers, they would go here
  state: Reducer
});

// make the combined reducers available for import
export default reducer;