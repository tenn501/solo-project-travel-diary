import * as types from '../actions/actionTypes';

const initialState = {
  welcomeHeader: "My Travel Diary",
  newTitle: '',
  newDescription: ''
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_TITLE:
      // const newT = state.newTitle.concat(action.payload);
			return {
				...state,
				newTitle: action.payload,
			};

    case types.CREATE_DESCRIPTION:
      // const newD = state.newDescription.concat(action.payload);
			return {
				...state,
				newDescription: action.payload,
			};
    case types.CLEAR:
      return {
        ...state, 
        newDescription: '',
        newTitle: '',
      };

		default: {
			return state;
		}
  }
  
};

export default Reducer;