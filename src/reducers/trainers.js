import {
  FETCH_TRAINERS_REQUEST,
  FETCH_TRAINERS_SUCCESS,
  FETCH_TRAINERS_FAILURE,
  ADD_TRAINER_SUCCESS,
  ADD_TRAINER_FAILURE,
  EDIT_TRAINER_SUCCESS,
  EDIT_TRAINER_FAILURE,
  DELETE_TRAINER_SUCCESS,
  DELETE_TRAINER_FAILURE
} from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TRAINERS_SUCCESS:
      return action.payload;
    case FETCH_TRAINERS_REQUEST:
      return state;
    case FETCH_TRAINERS_FAILURE:
      return state;
    case ADD_TRAINER_SUCCESS:
      return state;
    case ADD_TRAINER_FAILURE:
      return state;
    case EDIT_TRAINER_SUCCESS:
      return state;
    case EDIT_TRAINER_FAILURE:
      return state;
    case DELETE_TRAINER_SUCCESS:
      return state;
    case DELETE_TRAINER_FAILURE:
      return state;
    default:
      return state;
  }
}
