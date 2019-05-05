import { SET_CURRENT_USER, SET_CURRENT_USER_DATA } from '../actions/types';
import isEmpty from '../utils/isEmpty';

const initialState = {
  isAuthenticated: false,
  token: {},
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        token: action.payload
      };
    case SET_CURRENT_USER_DATA:
      return {
        ...state,
        user: action.payload.user
      };
    default:
      return state;
  }
}
