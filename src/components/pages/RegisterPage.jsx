import React, { Fragment, Component } from 'react';
import { Container, Row, Col, Card, CardBody, Button, Form, FormGroup, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from '../molecules/Header';
import { registerUser } from '../../actions/authentication';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirm: '',
      errors: {}
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/');
    }
  }

  componentWillReceiveProps(nextProps) {
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
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    };
    this.props.registerUser(user, this.props.history);
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
                  <h2 style={{ marginBottom: '40px' }}>Registration</h2>
                  <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                      <Input
                        type="text"
                        placeholder="Enter firstname"
                        className={errors.name ? 'is-invalid' : ''}
                        name="firstName"
                        onChange={this.handleInputChange}
                        value={this.state.firstName}
                      />
                      {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                    </FormGroup>
                    <FormGroup>
                      <Input
                        type="text"
                        placeholder="Enter lastname"
                        className={errors.name ? 'is-invalid' : ''}
                        name="lastName"
                        onChange={this.handleInputChange}
                        value={this.state.lastName}
                      />
                      {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                    </FormGroup>
                    <FormGroup>
                      <Input
                        type="email"
                        placeholder="Enter email"
                        className={errors.email ? 'is-invalid' : ''}
                        name="email"
                        onChange={this.handleInputChange}
                        value={this.state.email}
                      />
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </FormGroup>
                    <FormGroup>
                      <Input
                        type="password"
                        placeholder="Enter password"
                        className={errors.password ? 'is-invalid' : ''}
                        name="password"
                        onChange={this.handleInputChange}
                        value={this.state.password}
                      />
                      {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                    </FormGroup>
                    <FormGroup>
                      <Input
                        type="password"
                        placeholder="Confirm password"
                        className={errors.passwordConfirm ? 'is-invalid' : ''}
                        name="passwordConfirm"
                        onChange={this.handleInputChange}
                        value={this.state.passwordConfirm}
                      />
                      {errors.passwordConfirm && <div className="invalid-feedback">{errors.passwordConfirm}</div>}
                    </FormGroup>
                    <FormGroup>
                      <Button type="submit" color="primary">
                        Register User
                      </Button>
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
