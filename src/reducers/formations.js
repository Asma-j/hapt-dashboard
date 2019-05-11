import { FETCH_FORMATIONS_SUCCESS, ADD_FORMATIONS_SUCCESS } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_FORMATIONS_SUCCESS:
      return action.payload;
    case ADD_FORMATIONS_SUCCESS:
      return [...state, action.payload];
    default:
      return state;
  }
}
