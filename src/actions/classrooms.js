/* eslint-disable no-console */
import axios from 'axios';
import remoteAPI from '../utils/config';

export const getAllClassrooms = () => dispatch => {
  dispatch({ type: 'FETCH_CLASSROOMS_REQUEST' });
  axios
    .get(`${remoteAPI}/classrooms`)
    .then(res => {
      dispatch({
        type: 'FETCH_CLASSROOMS_SUCCESS',
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: 'FETCH_CLASSROOMS_FAILURE' });
      console.error(err);
    });
};

export const addClassroom = classroom => dispatch => {
  axios
    .post(`${remoteAPI}/classrooms`, classroom)
    .then(res => {
      dispatch({ type: 'ADD_CLASSROOM_SUCCESS' });
      return res.data;
    })
    .catch(err => {
      dispatch({ type: 'ADD_CLASSROOM_FAILURE' });
      console.error(err.response.data);
    });
};

export const editClassroom = classroom => dispatch => {
  axios
    .put(`${remoteAPI}/classrooms/${classroom._id}`, classroom)
    .then(res => {
      dispatch({ type: 'EDIT_CLASSROOM_SUCCESS' });
      return res.data;
    })
    .catch(err => {
      dispatch({ type: 'EDIT_CLASSROOM_FAILURE' });
      console.error(err.response.data);
    });
};

export const deleteClassroom = classroom => dispatch => {
  axios
    .delete(`${remoteAPI}/classrooms/${classroom._id}`)
    .then(res => {
      dispatch({ type: 'DELETE_CLASSROOM_SUCCESS' });
      return res.data;
    })
    .catch(err => {
      dispatch({ type: 'DELETE_CLASSROOM_FAILURE' });
      console.error(err.response.data);
    });
};
