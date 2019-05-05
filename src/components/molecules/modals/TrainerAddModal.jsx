import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

class TrainerAddModal extends Component {
  constructor(props) {
    super(props);
    this.handleOpenClose = this.handleOpenClose.bind(this);
    this.state = {
      isOpen: false,
      firstName: null,
      lastName: null,
      email: null
    };
  }

  handleOpenClose() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      firstName: '',
      lastName: '',
      email: ''
    }));
  }

  render() {
    const { isOpen, firstName, lastName, email } = this.state;
    return (
      <div>
        <Button color="success" onClick={this.handleOpenClose} outline>
          <i className="fas fa-plus" /> Add Trainer
        </Button>
        <Modal isOpen={isOpen} className="bg-success" toggle={this.handleOpenClose}>
          <ModalHeader toggle={this.handleOpenClose}>
            <b>Add course</b>
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="firstname">FirstName</Label>
                <Input
                  type="text"
                  value={firstName}
                  name="firstname"
                  id="firstname"
                  placeholder="Enter the First Name.."
                />
              </FormGroup>
              <FormGroup>
                <Label for="lastname">LastName</Label>
                <Input type="text" value={lastName} name="lastname" id="lastname" placeholder="Enter the Last Name.." />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="text" value={email} name="email" id="email" placeholder="Enter the Email.." />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.handleOpenClose}>
              Cancel
            </Button>
            <Button color="success" onClick={this.handleOpenClose}>
              Add
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default TrainerAddModal;
