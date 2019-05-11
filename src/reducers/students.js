import { FETCH_STUDENTS_SUCCESS } from '../actions/types';
import initialState from './initialState';

export default function(state = initialState.students, action) {
  switch (action.type) {
    case FETCH_STUDENTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
