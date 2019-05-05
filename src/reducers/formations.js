import {
  FETCH_FORMATIONS_REQUEST,
  FETCH_FORMATIONS_SUCCESS,
  FETCH_FORMATIONS_FAILURE,
  ADD_FORMATION_SUCCESS,
  ADD_FORMATION_FAILURE,
  EDIT_FORMATION_SUCCESS,
  EDIT_FORMATION_FAILURE,
  DELETE_FORMATION_SUCCESS,
  DELETE_FORMATION_FAILURE
} from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_FORMATIONS_SUCCESS:
      return action.payload;
    case FETCH_FORMATIONS_REQUEST:
      return state;
    case FETCH_FORMATIONS_FAILURE:
      return state;
    case ADD_FORMATION_SUCCESS:
      return state;
    case ADD_FORMATION_FAILURE:
      return state;
    case EDIT_FORMATION_SUCCESS:
      return state;
    case EDIT_FORMATION_FAILURE:
      return state;
    case DELETE_FORMATION_SUCCESS:
      return state;
    case DELETE_FORMATION_FAILURE:
      return state;
    default:
      return state;
  }
}
