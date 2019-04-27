import React, { Fragment, Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from '../molecules/Header'
import Footer from '../molecules/Footer'
import SectionCard from '../atoms/SectionCard';
import Student from '../../assets/images/user-5.svg';
import Trainer from '../../assets/images/user-4.svg';
import Classrooms from '../../assets/images/desk.svg';
import Calendar from '../../assets/images/calendar.svg';
import Settings from '../../assets/images/settings-1.svg';
import Payment from '../../assets/images/dollar-symbol-1.svg';
import Course from '../../assets/images/bar-chart.svg';
import Certificat from '../../assets/images/handshake.svg';
import Session from '../../assets/images/startup.svg';

const loggedInUser = {
  firstName: 'Malek',
  lastName: 'Boubakri'
}

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Header user={loggedInUser}/>
        <Container className="pt-5">
          <Row>
            <Col>
              <SectionCard image={Student} title="Students"/>
            </Col>
            <Col>
              <SectionCard image={Trainer} title="Trainers" />
            </Col>
            <Col>
              <SectionCard image={Classrooms} title="Classrooms" />
            </Col>
          </Row>
          <Row>
            <Col>
              <SectionCard image={Course} title="Courses" />
            </Col>
            <Col>
              <SectionCard image={Session} title="Sessions" />
            </Col>
            <Col>
              <SectionCard image={Certificat} title="Certificats" />
            </Col>
          </Row>
          <Row>
            <Col>
              <SectionCard image={Calendar} title="Calendars" />
            </Col>
            <Col>
              <SectionCard image={Payment} title="Payments" />
            </Col>
            <Col>
              <SectionCard image={Settings} title="Settings" />
            </Col>
          </Row>
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

export default Main;
