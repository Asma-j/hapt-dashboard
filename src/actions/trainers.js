import axios from 'axios';
import remoteAPI from '../utils/config';

export const getAllTrainers = () => dispatch => {
  dispatch({ type: 'FETCH_TRAINERS_REQUEST' });
  axios
    .get(`${remoteAPI}/trainers`)
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
    .post(`${remoteAPI}/trainers`, trainer)
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
    .put(`${remoteAPI}/trainers/${trainer._id}`, trainer)
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
    .delete(`${remoteAPI}/trainers/${trainer._id}`)
    .then(res => {
      dispatch({ type: 'DELETE_TRAINER_SUCCESS' });
      return res.data;
    })
    .catch(err => {
      dispatch({ type: 'DELETE_TRAINER_FAILURE' });
      console.error(err.response.data);
    });
};
