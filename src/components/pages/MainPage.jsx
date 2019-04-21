import React, { Fragment, Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from '../molecules/Header'
import Footer from '../molecules/Footer'
import SectionCard from '../atoms/SectionCard';
import Student from '../../assets/images/user-5.svg';

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
          <Row>
            <Col>
              <SectionCard image={Student} title="Students"/>
            </Col>
            <Col>
              <SectionCard image="" title="Trainers" />
            </Col>
            <Col>
              <SectionCard image="" title="Classrooms" />
            </Col>
          </Row>
          <Row>
            <Col>
              <SectionCard image="" title="Calendars" />
            </Col>
            <Col>
              <SectionCard image="" title="Payments" />
            </Col>
            <Col>
              <SectionCard image="" title="Settings" />
            </Col>
          </Row>
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

export default Main;
