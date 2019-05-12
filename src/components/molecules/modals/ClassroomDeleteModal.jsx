/* eslint-disable react/destructuring-assignment */
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteClassroom, getAllClassrooms } from '../../../actions/classrooms';


class ClassroomDeleteModal extends Component {
  constructor(props) {
    super(props);
    this.handleOpenClose = this.handleOpenClose.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.state = {
      isOpen: false
    };
  }

  handleOnSubmit = async () => {
    await this.props.deleteClassroom(this.props.classroom);
    await this.props.getAllClassrooms();
    this.setState({ isOpen: false });
  };

  handleOpenClose() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    const { classroom } = this.props;
    const { isOpen } = this.state;
    return (
      <Fragment>
        <Button color="danger" size="sm" onClick={this.handleOpenClose} outline>
          <FontAwesomeIcon icon="trash" /> Delete
        </Button>
        <Modal isOpen={isOpen} toggle={this.handleOpenClose}>
          <ModalHeader className="bg-danger text-white" toggle={this.handleOpenClose}>
            <b>Delete classroom:</b> #{classroom.number}
          </ModalHeader>
          <ModalBody>Are you sure you want to delete this classroom?</ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.handleOpenClose}>
              Cancel
            </Button>
            <Button color="danger" onClick={this.handleOnSubmit}>
              <FontAwesomeIcon icon="trash" /> Delete
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = store => ({
  classrooms: store.classrooms
});

const mapDispatchToProps = {
  deleteClassroom,
  getAllClassrooms
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassroomDeleteModal);
