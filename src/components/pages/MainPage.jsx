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
import Certificate from '../../assets/images/bill.svg';
import Inscription from '../../assets/images/handshake.svg';
import Session from '../../assets/images/startup.svg';
import Test from '../../assets/images/laptop.svg';

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
            <Col md="4" xs="12">
              <SectionCard image={Student} title="Students" link="/students" />
            </Col>
            <Col md="4" xs="12">
              <SectionCard image={Trainer} title="Trainers" link="/trainers" />
            </Col>
            <Col md="4" xs="12">
              <SectionCard image={Classrooms} title="Classrooms" link="/classrooms" disabled />
            </Col>
          </Row>
          <Row>
            <Col md="4" xs="12">
              <SectionCard image={Course} title="Courses" link="/courses" />
            </Col>
            <Col md="4" xs="12">
              <SectionCard image={Session} title="Sessions" link="/sessions" disabled />
            </Col>
            <Col md="4" xs="12">
              <SectionCard image={Calendar} title="Calendars" link="/calendars" disabled />
            </Col>
          </Row>
          <Row>
            <Col md="4" xs="12">
              <SectionCard image={Session} title="Formations" link="/formations" />
            </Col>
            <Col md="4" xs="12">
              <SectionCard image={Test} title="Tests" link="/tests" disabled />
            </Col>
            <Col md="4" xs="12">
              <SectionCard image={Certificate} title="Certificates" link="/certificates" disabled />
            </Col>
          </Row>
          <Row>
            <Col md="4" xs="12">
              <SectionCard image={Inscription} title="Inscriptions" link="/inscriptions" disabled />
            </Col>
            <Col md="4" xs="12">
              <SectionCard image={Payment} title="Payments" link="/payments" disabled />
            </Col>
            <Col md="4" xs="12">
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
