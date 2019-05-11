import { FETCH_COURSES_SUCCESS } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
