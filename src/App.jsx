/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
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
import TrainersPage from './components/pages/TrainersPage';
import RegisterPage from './components/pages/RegisterPage';

library.add(faCog, faPlus, faTrash, faEdit, faSignOutAlt, faUserPlus);

class App extends Component {
  componentWillMount() {
    if (localStorage.jwtToken) {
      setAuthToken(localStorage.jwtToken);
      const decoded = jwtDecode(localStorage.jwtToken);
      store.dispatch(setCurrentUser(decoded));
      if (decoded.exp < Date.now() / 1000) {
        store.dispatch(logoutUser());
        this.props.history.push('/login');
      }
    }
  }

  render() {
    return (
      <Router>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/courses" component={CoursesPage} />
        <Route exact path="/formations" component={FormationsPage} />
        <Route exact path="/students" component={StudentsPage} />
        <Route exact path="/trainers" component={TrainersPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  authentication: state.authentication
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
