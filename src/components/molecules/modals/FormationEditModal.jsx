import React, { Fragment, Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { capitaliseString } from '../../../utils/tools';
import { getAllTrainers } from '../../../api/trainers';

class FormationEditModal extends Component {
  constructor(props) {
    super(props);
    this.handleOpenClose = this.handleOpenClose.bind(this);
    this.state = {
      isOpen: false,
      title: null,
      tutor: null,
      course: null,
      trainers: []
    };
  }

  handleChangeTitle = event => {
    this.setState({
      title: capitaliseString(event.target.value)
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleOnSubmit = async event => {
    const { title, tutor, course } = this.state;
    event.preventDefault();
    await this.editFormation({ title, tutor, course });
  };

  handleOpenClose() {
    const { formation } = this.props;
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      title: formation.title,
      tutor: formation.tutor.number,
      course: formation.course,
      trainers: getAllTrainers()
    }));
  }

  render() {
    const { isOpen, title, tutor, trainers } = this.state;
    const { formation } = this.props;
    return (
      <Fragment>
        <Button color="warning" size="sm" onClick={this.handleOpenClose} outline>
          <FontAwesomeIcon icon="edit" /> Edit
        </Button>
        <Form onSubmit={this.handleOnSubmit}>
          <Modal isOpen={isOpen} toggle={this.handleOpenClose}>
            <ModalHeader className="bg-warning" toggle={this.handleOpenClose}>
              <b>Edit formation:</b> {formation.title}
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
                <Label for="trainer">Tutor</Label>
                <Input type="select" name="tutor" id="number" value={tutor} onChange={this.handleChange}>
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
              <Button color="warning" onClick={this.handleOpenClose}>
                <FontAwesomeIcon icon="edit" /> Edit
              </Button>
            </ModalFooter>
          </Modal>
        </Form>
      </Fragment>
    );
  }
}

export default FormationEditModal;
