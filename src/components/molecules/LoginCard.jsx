import React, { Component } from 'react';
import { Card, CardBody,  Button, Form, FormGroup, Label, Input } from 'reactstrap';

class LoginCard extends Component {
  render() {
    return (
        <Card>
            <CardBody>
            <Form>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="Enter your Email.." />
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" id="password" placeholder="Enter your password.." />
            </FormGroup>
        <Button>Login</Button>
        </Form>
        </CardBody>
        </Card>
    );
  }
}

export default LoginCard;
