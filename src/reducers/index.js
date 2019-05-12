import { combineReducers } from 'redux';
import errors from './errors';
import authentication from './authentication';
import formations from './formations';
import courses from './courses';
import trainers from './trainers';
import students from './students';
import classrooms from './classrooms';

export default combineReducers({
  errors,
  courses,
  formations,
  trainers,
  students,
  authentication,
  classrooms
});
