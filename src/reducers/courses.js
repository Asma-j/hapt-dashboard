import {
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAILURE,
  ADD_COURSE_SUCCESS,
  ADD_COURSE_FAILURE,
  EDIT_COURSE_SUCCESS,
  EDIT_COURSE_FAILURE,
  DELETE_COURSE_SUCCESS,
  DELETE_COURSE_FAILURE
} from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSES_SUCCESS:
      return action.payload;
    case FETCH_COURSES_REQUEST:
      return state;
    case FETCH_COURSES_FAILURE:
      return state;
    case ADD_COURSE_SUCCESS:
      return state;
    case ADD_COURSE_FAILURE:
      return state;
    case EDIT_COURSE_SUCCESS:
      return state;
    case EDIT_COURSE_FAILURE:
      return state;
    case DELETE_COURSE_SUCCESS:
      return state;
    case DELETE_COURSE_FAILURE:
      return state;
    default:
      return state;
  }
}
