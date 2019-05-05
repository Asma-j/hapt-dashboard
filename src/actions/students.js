import axios from 'axios';

export const getAllStudents = () => dispatch => {
  dispatch({ type: 'FETCH_STUDENTS_REQUEST' });
  axios
    .get('/students')
    .then(res => {
      dispatch({
        type: 'FETCH_STUDENTS_SUCCESS',
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: 'FETCH_STUDENTS_FAILURE' });
      console.error(err);
    });
};

export const addStudent = student => dispatch => {
  axios
    .post('/students', student)
    .then(res => {
      dispatch({ type: 'ADD_STUDENT_SUCCESS' });
      return res.data;
    })
    .catch(err => {
      dispatch({ type: 'ADD_STUDENT_FAILURE' });
      console.error(err.response.data);
    });
};

export const editStudent = student => dispatch => {
  axios
    .put(`/students/${student._id}`, student)
    .then(res => {
      dispatch({ type: 'EDIT_STUDENT_SUCCESS' });
      return res.data;
    })
    .catch(err => {
      dispatch({ type: 'EDIT_STUDENT_FAILURE' });
      console.error(err.response.data);
    });
};

export const deleteStudent = student => dispatch => {
  axios
    .delete(`/students/${student._id}`)
    .then(res => {
      dispatch({ type: 'DELETE_STUDENT_SUCCESS' });
      return res.data;
    })
    .catch(err => {
      dispatch({ type: 'DELETE_STUDENT_FAILURE' });
      console.error(err.response.data);
    });
};
