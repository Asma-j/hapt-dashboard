import React, { Component } from 'react';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import CoursesPage from './pages/CoursesPage';

const user = {
  firstName: 'Malek',
  lastName: 'Boubakri'
};

class App extends Component {
  render() {
    return <CoursesPage loggedInUser={user} />;
  }
}

export default App;
