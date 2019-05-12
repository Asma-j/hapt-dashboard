import { FETCH_CLASSROOMS_SUCCESS } from '../actions/types';
import initialState from './initialState';

export default function(state = initialState.classrooms, action) {
  switch (action.type) {
    case FETCH_CLASSROOMS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
