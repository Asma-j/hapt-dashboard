import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class StudentAddModal extends Component {
  constructor(props) {
    super(props);
    this.handleOpenClose = this.handleOpenClose.bind(this);
    this.state = {
      isOpen: false
    };
  }

  handleOpenClose() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <Button color="success" onClick={this.handleOpenClose} outline>
          <FontAwesomeIcon icon="plus" /> Add Student
        </Button>
        <Modal isOpen={isOpen} toggle={this.handleOpenClose}>
          <ModalHeader className="bg-success" toggle={this.handleOpenClose}>
            <b>Add student</b>
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="firstname">FirstName</Label>
                <Input type="text" name="firstname" id="firstname" placeholder="Enter the First Name.." />
              </FormGroup>
              <FormGroup>
                <Label for="lastname">LastName</Label>
                <Input type="text" name="lastname" id="lastname" placeholder="Enter the Last Name.." />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="text" name="email" id="email" placeholder="Enter the Email.." />
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

export default StudentAddModal;
