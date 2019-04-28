import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { capitaliseString } from '../../../utils/tools';

class CourseAddModal extends Component {
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
    const { title, tutor, formation } = this.state;
    event.preventDefault();
    await this.addCourse({ title, tutor, formation });
  };

  handleOpenClose() {
    const { formations } = this.props;
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      title: '',
      tutor: '',
      formation: formations && formations.length > 0 ? formations[0] : ''
    }));
  }

  render() {
    const { isOpen, title, tutor, formation } = this.state;
    const { formations } = this.props;
    return (
      <div>
        <Button color="success" onClick={this.handleOpenClose} outline>
          <i className="fas fa-plus" /> Add course
        </Button>
        <Form onSubmit={this.handleOnSubmit}>
          <Modal isOpen={isOpen} toggle={this.handleOpenClose}>
            <ModalHeader className="bg-success" toggle={this.handleOpenClose}>
              Add course
            </ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Enter the course's title.."
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
                  placeholder="Enter the course's tutor.."
                  value={tutor}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="formation">Formation</Label>
                <Input
                  type="select"
                  name="title"
                  id="title"
                  placeholder="Enter the course title.."
                  value={formation}
                  onChange={this.handleChange}
                >
                  {formations.map(forma => (
                    <option value={forma.number}>{forma.title}</option>
                  ))}
                </Input>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.handleOpenClose}>
                Cancel
              </Button>
              <Button color="success" onClick={this.handleOpenClose}>
                <i className="fas fa-plus" /> Add
              </Button>
            </ModalFooter>
          </Modal>
        </Form>
      </div>
    );
  }
}

export default CourseAddModal;
