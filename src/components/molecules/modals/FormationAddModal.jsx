/* eslint-disable react/destructuring-assignment */
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addFormation, getAllFormations } from '../../../actions/formations';
import { capitaliseString } from '../../../utils/tools';
import { editTrainer, getAllTrainers } from '../../../actions/trainers';

class FormationAddModal extends Component {
  constructor(props) {
    super(props);
    this.handleOpenClose = this.handleOpenClose.bind(this);
    this.state = {
      isOpen: false,
      title: null
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
   * @description This method save the new data and prevent the default page refresh.
   * @param event launched on form submitting.
   */
  handleOnSubmit = event => {
    event.preventDefault();
    const { title } = this.state;
    this.props.addFormation({ title: capitaliseString(title) });
    this.props.getAllFormations();
    this.setState({ isOpen: false });
  };

  handleOpenClose() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      title: ''
    }));
  }

  render() {
    const { isOpen, title } = this.state;
    return (
      <Fragment>
        <Button color="success" onClick={this.handleOpenClose} outline>
          <FontAwesomeIcon icon="plus" /> Add formation
        </Button>
        <Modal isOpen={isOpen} toggle={this.handleOpenClose}>
          <ModalHeader className="bg-success" toggle={this.handleOpenClose}>
            <b>Add formation</b>
          </ModalHeader>
          <Form onSubmit={this.handleOnSubmit}>
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
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.handleOpenClose}>
                Cancel
              </Button>
              <Button type="submit" color="success" disabled={!title}>
                <FontAwesomeIcon icon="plus" /> Add
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = store => ({
  formations: store.formations
});

const mapDispatchToProps = {
  addFormation,
  getAllFormations
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormationAddModal);
