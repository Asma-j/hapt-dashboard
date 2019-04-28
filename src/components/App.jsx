import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import CoursesPage from './pages/CoursesPage';
import FormationsPage from './pages/FormationsPage';
import StudentsPage from './pages/StudentsPage';

const App = () => (
  <Router>
    <Fragment>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/courses" component={CoursesPage} />
      <Route exact path="/formations" component={FormationsPage} />
      <Route exact path="/students" component={StudentsPage} />
      <Route exact path="/login" component={LoginPage} />
    </Fragment>
  </Router>
);

export default App;
