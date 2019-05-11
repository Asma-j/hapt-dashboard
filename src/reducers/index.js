import { combineReducers } from 'redux';
import errors from './errors';
import authentication from './authentication';
import formations from './formations';
import courses from './courses';
import trainers from './trainers';
import students from './students';

export default combineReducers({
  errors,
  courses,
  formations,
  trainers,
  students,
  authentication
});
