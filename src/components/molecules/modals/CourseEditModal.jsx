import React, { Fragment, Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

class CourseEditModal extends Component {
  constructor(props) {
    super(props);
    this.handleOpenClose = this.handleOpenClose.bind(this);
    this.state = {
      isOpen: false,
      title: null,
      tutor: null,
      formation: null
    };
  }

  handleOpenClose() {
    const { formations, course } = this.props;
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      title: course.title,
      tutor: course.tutor,
      formation: formations && formations.length > 0 ? formations[0] : ''
    }));
  }

  render() {
    const { isOpen } = this.state;
    const { course, formations } = this.props;
    return (
      <Fragment>
        <Button color="warning" size="sm" onClick={this.handleOpenClose} outline>
          <i className="fas fa-edit" /> Edit
        </Button>
        <Modal isOpen={isOpen} toggle={this.handleOpenClose}>
          <ModalHeader toggle={this.handleOpenClose}>Edit course: {course.title}</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Enter the course's title.."
                  value={this.state.title}
                />
              </FormGroup>
              <FormGroup>
                <Label for="tutor">Tutor</Label>
                <Input
                  type="text"
                  name="tutor"
                  id="tutor"
                  placeholder="Enter the course's tutor.."
                  value={this.state.tutor}
                />
              </FormGroup>
              <FormGroup>
                <Label for="formation">Formation</Label>
                <Input
                  type="select"
                  name="title"
                  id="title"
                  placeholder="Enter the course title.."
                  value={this.state.formation}
                >
                  {formations.map(formation => (
                    <option value={formation.number}>{formation.title}</option>
                  ))}
                </Input>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.handleOpenClose}>
              Cancel
            </Button>
            <Button color="warning" onClick={this.handleOpenClose}>
              Edit
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

export default CourseEditModal;
