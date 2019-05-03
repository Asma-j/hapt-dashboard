import React, { Fragment, Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { capitaliseString } from '../../../utils/tools';

class FormationEditModal extends Component {
  constructor(props) {
    super(props);
    this.handleOpenClose = this.handleOpenClose.bind(this);
    this.state = {
      isOpen: false,
      title: null,
      tutor: null,
      course: null
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
    const { formations } = this.props;
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      title: formations.title,
      tutor: formations.tutor,
      course: formations.course
    }));
  }

  render() {
    const { isOpen, title, tutor, course } = this.state;
    const { formations } = this.props;
    return (
      <Fragment>
        <Button color="warning" size="sm" onClick={this.handleOpenClose} outline>
          <i className="fas fa-edit" /> Edit
        </Button>
        <Form onSubmit={this.handleOnSubmit}>
          <Modal isOpen={isOpen} toggle={this.handleOpenClose}>
            <ModalHeader className="bg-warning" toggle={this.handleOpenClose}>
              Edit Formation : {formations.title}
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
                <Input
                  type="text"
                  name="tutor"
                  id="tutor"
                  placeholder="Enter the formation's tutor.."
                  value={tutor}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="courses">Course</Label>
                <Input
                  type="stext"
                  name="courses"
                  id="courses"
                  placeholder="Enter the course name.."
                  value={course}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.handleOpenClose}>
                Cancel
              </Button>
              <Button color="warning" onClick={this.handleOpenClose}>
                <i className="fas fa-edit" /> Edit
              </Button>
            </ModalFooter>
          </Modal>
        </Form>
      </Fragment>
    );
  }
}

export default FormationEditModal;
