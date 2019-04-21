import React, { Fragment, Component } from 'react';
import { Container } from 'reactstrap';
import Header from '../molecules/Header'
import Footer from '../molecules/Footer'

const loggedInUser = {
  firstName: 'Malek',
  lastName: 'Boubakri'
}

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Header user={loggedInUser}/>
        <Container>
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

export default Main;
