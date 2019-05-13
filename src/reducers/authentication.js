import { SET_TOKEN, SET_AUTH_USER } from '../actions/types';
import isEmpty from '../utils/isEmpty';

const initialState = {
  isAuthenticated: false,
  token: {},
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        token: action.payload
      };
    case SET_AUTH_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
