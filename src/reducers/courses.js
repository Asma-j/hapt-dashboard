import { FETCH_COURSES_SUCCESS } from '../actions/types';
import initialState from './initialState';

export default function(state = initialState.courses, action) {
  switch (action.type) {
    case FETCH_COURSES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
