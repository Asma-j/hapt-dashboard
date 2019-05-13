import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { GET_ERRORS, SET_TOKEN, SET_AUTH_USER } from './types';
import setAuthToken from '../utils/setAuthToken';
import remoteAPI from '../utils/config';

export const setToken = decoded => {
  return {
    type: SET_TOKEN,
    payload: decoded
  };
};

export const loginUser = credentials => dispatch => {
  axios
    .post(`${remoteAPI}/signin`, credentials)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem('token', token);
      setAuthToken(token);
      const decoded = jwtDecode(token);
      dispatch(setToken(decoded));
      dispatch({
        type: SET_AUTH_USER,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const getAuthUser = history => dispatch => {
  axios
    .get(`${remoteAPI}/currentuser`)
    .then(res => {
      dispatch({
        type: SET_AUTH_USER,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
      history.push('/login');
    });
};

export const logoutUser = history => dispatch => {
  localStorage.removeItem('token');
  setAuthToken(false);
  dispatch(setToken({}));
  history.push('/login');
};

// ToDo: we'll remove this action when we add super.user auto create on API.
export const registerUser = (user, history) => dispatch => {
  axios
    .post(`${remoteAPI}/register`, user)
    .then(() => history.push('/login'))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
