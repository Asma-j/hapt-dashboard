import { FETCH_TRAINERS_SUCCESS } from '../actions/types';
import initialState from './initialState';

export default function(state = initialState.trainers, action) {
  switch (action.type) {
    case FETCH_TRAINERS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
