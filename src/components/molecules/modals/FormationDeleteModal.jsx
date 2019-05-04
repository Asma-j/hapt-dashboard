import React, { Fragment, Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class FormationDeleteModal extends Component {
  constructor(props) {
    super(props);
    this.handleOpenClose = this.handleOpenClose.bind(this);
    this.state = {
      isOpen: false
    };
  }

  handleOnSubmit = async event => {
    const { formation } = this.props;
    event.preventDefault();
    await this.deleteFormation(formation);
  };

  handleOpenClose() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    const { formation } = this.props;
    const { isOpen } = this.state;
    return (
      <Fragment>
        <Button color="danger" size="sm" onClick={this.handleOpenClose} outline>
          <i className="fas fa-trash" /> Delete
        </Button>
        <Modal isOpen={isOpen} toggle={this.handleOpenClose}>
          <ModalHeader className="bg-danger text-white" toggle={this.handleOpenClose}>
            Edit Formation : {formation.title}
          </ModalHeader>
          <ModalBody>Are you sure you want to delete this formation?</ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.handleOpenClose}>
              Cancel
            </Button>
            <Button color="danger" onClick={this.handleOpenClose}>
              <i className="fas fa-trash" /> Delete
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

export default FormationDeleteModal;
