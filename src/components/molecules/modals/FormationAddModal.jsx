import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAllTrainers } from '../../../api/trainers';
import { capitaliseString } from '../../../utils/tools';

class FormationAddModal extends Component {
  constructor(props) {
    super(props);
    this.handleOpenClose = this.handleOpenClose.bind(this);
    this.state = {
      isOpen: false,
      title: null,
      tutor: null,
      trainers: []
    };
  }

  /**
   * @description This method makes it straightforward to modify or validate specific user input,
   * example we tried to capitalize the first character of the name.
   * @param event launched on form changing.
   */
  handleChangeTitle = event => {
    this.setState({
      title: capitaliseString(event.target.value)
    });
  };

  /**
   * @description This method makes it straightforward to modify any user input.
   * @param event launched on form changing.
   */
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  /**
   * @description This method save the new data and prevent the default page refresh.
   * @param event launched on form submitting.
   */
  handleOnSubmit = async event => {
    const { title, tutor } = this.state;
    event.preventDefault();
    await this.addFormation({ title, tutor });
  };

  handleOpenClose() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      title: '',
      tutor: '',
      trainers: getAllTrainers()
    }));
  }

  render() {
    const { isOpen, title, tutor, trainers } = this.state;
    return (
      <div>
        <Button color="success" onClick={this.handleOpenClose} outline>
          <FontAwesomeIcon icon="plus" /> Add formation
        </Button>
        <Form onSubmit={this.handleOnSubmit}>
          <Modal isOpen={isOpen} toggle={this.handleOpenClose}>
            <ModalHeader className="bg-success" toggle={this.handleOpenClose}>
              <b>Add formation</b>
            </ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Enter the formation's title.."
                  value={title}
                  onChange={this.handleChangeTitle}
                />
              </FormGroup>
              <FormGroup>
                <Label for="tutor">Tutor</Label>
                <Input type="select" name="tutor" id="tutor" value={tutor} onChange={this.handleChange}>
                  {trainers.map(trainer => (
                    <option value={trainer.number}>
                      {trainer.firstName} {trainer.lastName}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.handleOpenClose}>
                Cancel
              </Button>
              <Button color="success" onClick={this.handleOpenClose}>
                <FontAwesomeIcon icon="plus" /> Add
              </Button>
            </ModalFooter>
          </Modal>
        </Form>
      </div>
    );
  }
}

export default FormationAddModal;
