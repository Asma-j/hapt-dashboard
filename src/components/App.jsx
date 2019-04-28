import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import CoursesPage from './pages/CoursesPage';

const App = () => (
      <Router>
          <Fragment>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/courses" component={CoursesPage} />
            <Route exact path="/login" component={LoginPage} />
          </Fragment>
      </Router>
    );

export default App;
