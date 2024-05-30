import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools/extension';
import reducer from './reducers/main';

// console.log(composeWithDevTools);
// we are adding composeWithDevTools here to get easy access to the Redux dev tools
const diary = createStore(reducer)//, composeWithDevTools());

export default diary;