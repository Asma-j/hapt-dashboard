/* eslint-disable no-console */
import axios from 'axios';
import remoteAPI from '../utils/config';

export const getAllCourses = () => dispatch => {
  dispatch({ type: 'FETCH_COURSES_REQUEST' });
  axios
    .get(`${remoteAPI}/courses`)
    .then(res => {
      dispatch({
        type: 'FETCH_COURSES_SUCCESS',
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: 'FETCH_COURSES_FAILURE' });
      console.error(err);
    });
};

export const addCourse = course => dispatch => {
  axios
    .post(`${remoteAPI}/courses`, course)
    .then(res => {
      dispatch({ type: 'ADD_COURSE_SUCCESS' });
      return res.data;
    })
    .catch(err => {
      dispatch({ type: 'ADD_COURSE_FAILURE' });
      console.error(err.response.data);
    });
};

export const editCourse = course => dispatch => {
  axios
    .put(`${remoteAPI}/courses/${course._id}`, course)
    .then(res => {
      dispatch({ type: 'EDIT_COURSE_SUCCESS' });
      return res.data;
    })
    .catch(err => {
      dispatch({ type: 'EDIT_COURSE_FAILURE' });
      console.error(err.response.data);
    });
};

export const deleteCourse = course => dispatch => {
  axios
    .delete(`${remoteAPI}/courses/${course._id}`)
    .then(res => {
      dispatch({ type: 'DELETE_COURSE_SUCCESS' });
      return res.data;
    })
    .catch(err => {
      dispatch({ type: 'DELETE_COURSE_FAILURE' });
      console.error(err.response.data);
    });
};
