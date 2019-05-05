import React, { Fragment, Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class StudentDeleteModal extends Component {
  constructor(props) {
    super(props);
    this.handleOpenClose = this.handleOpenClose.bind(this);
    this.state = {
      isOpen: false
    };
  }

  handleOnSubmit = async event => {
    const { student } = this.props;
    event.preventDefault();
    await this.deleteStudent(student);
  };

  handleOpenClose() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    const { student } = this.props;
    const { isOpen } = this.state;
    return (
      <Fragment>
        <Button color="danger" size="sm" onClick={this.handleOpenClose} outline>
          <FontAwesomeIcon icon="trash" /> Delete
        </Button>
        <Modal isOpen={isOpen} toggle={this.handleOpenClose}>
          <ModalHeader className="bg-danger text-white" toggle={this.handleOpenClose}>
            <b>Delete student:</b> {student.firstName} {student.lastName}
          </ModalHeader>
          <ModalBody>Are you sure you want to delete this student?</ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.handleOpenClose}>
              Cancel
            </Button>
            <Button color="danger" onClick={this.handleOpenClose}>
              <FontAwesomeIcon icon="trash" /> Delete
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

export default StudentDeleteModal;
