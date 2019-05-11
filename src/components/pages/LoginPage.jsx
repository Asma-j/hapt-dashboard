import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Alert, Card, CardBody, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Header from '../molecules/Header';
import Footer from '../molecules/Footer';
import { loginUser } from '../../actions/authentication';
import { getAllTrainers } from '../../actions/trainers';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.authentication.isAuthenticated) {
      this.props.history.push('/');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.authentication.isAuthenticated) {
      this.props.history.push('/');
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(user);
  }

  render() {
    const { errors } = this.state;
    return (
      <Fragment>
        <Header />
        <Container>
          <Row className="align-items-center" style={{ height: '70vh' }}>
            <Col md={{ size: 6, offset: 3 }}>
              <Card>
                <CardBody>
                  <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                      <Label for="email">Email</Label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        className={errors.code === 143 ? 'is-invalid' : ''}
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        required
                      />
                      {errors.code === 143 && <div className="invalid-feedback">{errors.error}</div>}
                    </FormGroup>
                    <FormGroup>
                      <Label for="password">Password</Label>
                      <Input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        className={errors.code === 144 ? 'is-invalid' : ''}
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        required
                      />
                      {errors.code === 144 && <div className="invalid-feedback">{errors.error}</div>}
                    </FormGroup>
                    {errors && errors.code ? (
                      <Alert color="danger">
                        Your not enable to authenticat with those crediantials, please click{' '}
                        <Link to="/register" className="alert-link">
                          Register{' '}
                        </Link>
                        if you dont have an account.
                      </Alert>
                    ) : (
                      <Fragment />
                    )}
                    <Button color="primary">Login</Button>
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

const mapStateToProps = store => ({
  authentication: store.authentication,
  errors: store.errors
});

const mapDispatchToProps = {
  loginUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
