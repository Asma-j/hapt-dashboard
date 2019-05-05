import React, { Fragment, Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CourseDeleteModal extends Component {
  constructor(props) {
    super(props);
    this.handleOpenClose = this.handleOpenClose.bind(this);
    this.state = {
      isOpen: false
    };
  }

  handleOnSubmit = async event => {
    const { course } = this.props;
    event.preventDefault();
    await this.deleteCourse(course);
  };

  handleOpenClose() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    const { isOpen } = this.state;
    const { course } = this.props;
    return (
      <Fragment>
        <Button color="danger" size="sm" onClick={this.handleOpenClose} outline>
          <FontAwesomeIcon icon="trash" /> Delete
        </Button>
        <Form onSubmit={this.handleOnSubmit}>
          <Modal isOpen={isOpen} toggle={this.handleOpenClose}>
            <ModalHeader className="bg-danger text-white" toggle={this.handleOpenClose}>
              <b>Delete course:</b> {course.title}
            </ModalHeader>
            <ModalBody>Are you sure you want to delete this course ?</ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.handleOpenClose}>
                Cancel
              </Button>
              <Button color="danger" onClick={this.handleOpenClose}>
                <FontAwesomeIcon icon="trash" /> Delete
              </Button>
            </ModalFooter>
          </Modal>
        </Form>
      </Fragment>
    );
  }
}

export default CourseDeleteModal;
