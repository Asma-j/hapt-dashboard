import React, { Fragment, Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import LoginCard from '../molecules/LoginCard'
import Header from '../molecules/Header'
import Footer from '../molecules/Footer'

class Login extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Container>
          <Row className="align-items-center" style={{ height: '70vh' }}>
            <Col md={{size: 6, offset: 3}}>
              <LoginCard />
            </Col>
          </Row>
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

export default Login;
