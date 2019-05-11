import { FETCH_STUDENTS_SUCCESS } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_STUDENTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
