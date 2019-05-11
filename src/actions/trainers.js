import axios from 'axios';

export const getAllTrainers = () => dispatch => {
  dispatch({ type: 'FETCH_TRAINERS_REQUEST' });
  axios
    .get('/trainers')
    .then(res => {
      dispatch({
        type: 'FETCH_TRAINERS_SUCCESS',
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: 'FETCH_TRAINERS_FAILURE' });
      console.error(err);
    });
};

export const addTrainer = trainer => dispatch => {
  axios
    .post('/trainers', trainer)
    .then(res => {
      dispatch({ type: 'ADD_TRAINER_SUCCESS' });
      return res.data;
    })
    .catch(err => {
      dispatch({ type: 'ADD_TRAINER_FAILURE' });
      console.error(err.response.data);
    });
};

export const editTrainer = trainer => dispatch => {
  axios
    .put(`/trainers/${trainer._id}`, trainer)
    .then(res => {
      dispatch({ type: 'EDIT_TRAINER_SUCCESS' });
      return res.data;
    })
    .catch(err => {
      dispatch({ type: 'EDIT_TRAINER_FAILURE' });
      console.error(err.response.data);
    });
};

export const deleteTrainer = trainer => dispatch => {
  axios
    .delete(`/trainers/${trainer._id}`)
    .then(res => {
      dispatch({ type: 'DELETE_TRAINER_SUCCESS' });
      return res.data;
    })
    .catch(err => {
      dispatch({ type: 'DELETE_TRAINER_FAILURE' });
      console.error(err.response.data);
    });
};
