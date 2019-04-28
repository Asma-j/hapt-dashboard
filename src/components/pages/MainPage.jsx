import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
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
    this.state = {
      currentUser: null
    };
  }

  componentWillMount() {
    this.setState({
      currentUser: null
    });
  }

  render() {
    const { currentUser } = this.state;
    return (
      <Fragment>
        <Header user={currentUser} />
        <Container style={{ padding: '2vh' }}>
          <Row>
            <Col>
              <Link to="/students">
                <SectionCard image={Student} title="Students" />
              </Link>
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
              <Link to="/courses">
                <SectionCard image={Course} title="Courses" />
              </Link>
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
