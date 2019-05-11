/* eslint-disable react/destructuring-assignment */
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteFormation, getAllFormations } from '../../../actions/formations';

class FormationDeleteModal extends Component {
  constructor(props) {
    super(props);
    this.handleOpenClose = this.handleOpenClose.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.state = {
      isOpen: false
    };
  }

  handleOnSubmit = async () => {
    await this.props.deleteFormation(this.props.formation);
    this.props.getAllFormations();
    this.setState({ isOpen: false });
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
          <FontAwesomeIcon icon="trash" /> Delete
        </Button>
        <Modal isOpen={isOpen} toggle={this.handleOpenClose}>
          <ModalHeader className="bg-danger text-white" toggle={this.handleOpenClose}>
            <b>Delete formation:</b> {formation.title}
          </ModalHeader>
          <ModalBody>Are you sure you want to delete this formation?</ModalBody>
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
  formations: store.formations
});

export default connect(
  mapStateToProps,
  { deleteFormation, getAllFormations }
)(FormationDeleteModal);
