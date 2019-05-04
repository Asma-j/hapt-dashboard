import React, { Fragment, Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, CardBody, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Header from '../molecules/Header';
import Footer from '../molecules/Footer';
import { remoteAPI } from '../../utils/config';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const credentials = { email: this.state.email, password: this.state.password };
    axios
      .post(`${remoteAPI}/signin`, credentials, {
        headers: { 'Content-Type': 'application/json' }
      })
      .then(res => {
        if (res.status === 200) {
          console.log('Logging in successfully');
          // this.props.history.push('/');
        } else {
          const error = new Error(res.data);
          throw error;
        }
      })
      .catch(err => {
        console.warn('Error logging in please try again');
        console.error(err);
      });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <Container>
          <Row className="align-items-center" style={{ height: '70vh' }}>
            <Col md={{ size: 6, offset: 3 }}>
              <Card>
                <CardBody>
                  <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                      <Label for="email">Email</Label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="password">Password</Label>
                      <Input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        required
                      />
                    </FormGroup>
                    <Button>Login</Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

export default Login;
