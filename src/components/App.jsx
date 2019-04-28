import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import CoursesPage from './pages/CoursesPage';

const user = {
  firstName: 'Malek',
  lastName: 'Boubakri'
};

class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/courses" component={CoursesPage} />
            <Route exact path="/login" component={LoginPage} />
          </div>
      </Router>
    );
  }
}

export default App;
