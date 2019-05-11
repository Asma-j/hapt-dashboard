import axios from 'axios';
import remoteAPI from '../utils/config';

export const getAllFormations = () => dispatch => {
  dispatch({ type: 'FETCH_FORMATIONS_REQUEST' });
  axios
    .get(`${remoteAPI}/formations`)
    .then(res => {
      dispatch({
        type: 'FETCH_FORMATIONS_SUCCESS',
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: 'FETCH_FORMATIONS_FAILURE' });
      console.error(err);
    });
};

export const addFormation = formation => dispatch => {
  dispatch({ type: 'ADD_FORMATIONS_REQUEST' });
  axios
    .post(`${remoteAPI}/formations`, formation)
    .then(res => {
      dispatch({ type: 'ADD_FORMATION_SUCCESS' });
      return res.data;
    })
    .catch(err => {
      dispatch({ type: 'ADD_FORMATION_FAILURE' });
      console.error(err.response.data);
    });
};

export const editFormation = formation => dispatch => {
  axios
    .put(`${remoteAPI}/formations/${formation._id}`, formation)
    .then(res => {
      dispatch({ type: 'EDIT_FORMATION_SUCCESS' });
      return res.data;
    })
    .catch(err => {
      dispatch({ type: 'EDIT_FORMATION_FAILURE' });
      console.error(err.response.data);
    });
};

export const deleteFormation = formation => dispatch => {
  axios
    .delete(`${remoteAPI}/formations/${formation._id}`)
    .then(res => {
      dispatch({ type: 'DELETE_FORMATION_SUCCESS' });
      return res.data;
    })
    .catch(err => {
      dispatch({ type: 'DELETE_FORMATION_FAILURE' });
      console.error(err.response.data);
    });
};
