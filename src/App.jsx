import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCog, faPlus, faTrash, faEdit, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';
import LoginPage from './components/pages/LoginPage';
import MainPage from './components/pages/MainPage';
import CoursesPage from './components/pages/CoursesPage';
import FormationsPage from './components/pages/FormationsPage';
import StudentsPage from './components/pages/StudentsPage';
import ClassroomsPage from './components/pages/ClassroomsPage';
import TrainersPage from './components/pages/TrainersPage';
import RegisterPage from './components/pages/RegisterPage';

library.add(faCog, faPlus, faTrash, faEdit, faSignOutAlt, faUserPlus);

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwtDecode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login';
  }
}

/* const ProtectedRoute 
  = ({ isAuthenticated, ...props }) => 
     isAuthenticated 
     ? <Route {...props}/> 
     : <Redirect to="/login"/>; */

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/" component={MainPage} />
        <Route exact path="/courses" component={CoursesPage} />
        <Route exact path="/formations" component={FormationsPage} />
        <Route exact path="/students" component={StudentsPage} />
        <Route exact path="/trainers" component={TrainersPage} />
        <Route exact path="/classrooms" component={ClassroomsPage} />
        {/*<ProtectedRoute exact path="/trainers" component={TrainersPage} />*/}
      </Router>
    </Provider>
  );
};

export default App;
