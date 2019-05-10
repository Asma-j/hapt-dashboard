import {
  FETCH_STUDENTS_REQUEST,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_FAILURE,
  ADD_STUDENT_SUCCESS,
  ADD_STUDENT_FAILURE,
  EDIT_STUDENT_SUCCESS,
  EDIT_STUDENT_FAILURE,
  DELETE_STUDENT_SUCCESS,
  DELETE_STUDENT_FAILURE
} from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_STUDENTS_SUCCESS:
      return action.payload;
    case FETCH_STUDENTS_REQUEST:
      return state;
    case FETCH_STUDENTS_FAILURE:
      return state;
    case ADD_STUDENT_SUCCESS:
      return state;
    case ADD_STUDENT_FAILURE:
      return state;
    case EDIT_STUDENT_SUCCESS:
      return state;
    case EDIT_STUDENT_FAILURE:
      return state;
    case DELETE_STUDENT_SUCCESS:
      return state;
    case DELETE_STUDENT_FAILURE:
      return state;
    default:
      return state;
  }
}
