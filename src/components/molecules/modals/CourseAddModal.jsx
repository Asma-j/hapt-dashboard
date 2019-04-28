import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

class CourseAddModal extends Component {
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
    const { formations } = this.props;
    return (
      <div>
        <Button color="success" onClick={this.handleOpenClose} outline>
          <i className="fas fa-plus" /> Add course
        </Button>
        <Modal isOpen={isOpen} toggle={this.handleOpenClose}>
          <ModalHeader toggle={this.handleOpenClose}>Add course</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input type="text" name="title" id="title" placeholder="Enter the course's title.." />
              </FormGroup>
              <FormGroup>
                <Label for="tutor">Tutor</Label>
                <Input type="text" name="tutor" id="tutor" placeholder="Enter the course's tutor.." />
              </FormGroup>
              <FormGroup>
                <Label for="formation">Formation</Label>
                <Input type="select" name="title" id="title" placeholder="Enter the course title..">
                  {formations.map(formation =>
                    <option value={formation.number}>{formation.title}</option>
                  )}
                </Input>
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

export default CourseAddModal;
