import React, { Fragment, Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from '../molecules/Header';
import Footer from '../molecules/Footer';
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

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.setState({});
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Container style={{ padding: '2vh' }}>
          <Row>
            <Col>
              <SectionCard image={Student} title="Students" link="/students" />
            </Col>
            <Col>
              <SectionCard image={Trainer} title="Trainers" link="/trainers" />
            </Col>
            <Col>
              <SectionCard image={Classrooms} title="Classrooms" link="/classrooms" disabled />
            </Col>
          </Row>
          <Row>
            <Col>
              <SectionCard image={Course} title="Courses" link="/courses" />
            </Col>
            <Col>
              <SectionCard image={Session} title="Sessions" link="/sessions" disabled />
            </Col>
            <Col>
              <SectionCard image={Calendar} title="Calendars" link="/calendars" disabled />
            </Col>
          </Row>
          <Row>
            <Col>
              <SectionCard image={Session} title="Formations" link="/formations" />
            </Col>
            <Col>
              <SectionCard image={Session} title="Tests" link="/tests" disabled />
            </Col>
            <Col>
              <SectionCard image={Certificat} title="Certificates" link="/certificates" disabled />
            </Col>
          </Row>
          <Row>
            <Col>
              <SectionCard image={Certificat} title="Inscriptions" link="/inscriptions" disabled />
            </Col>
            <Col>
              <SectionCard image={Payment} title="Payments" link="/payments" disabled />
            </Col>
            <Col>
              <SectionCard image={Settings} title="Settings" link="/settings" disabled />
            </Col>
          </Row>
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

export default Main;
