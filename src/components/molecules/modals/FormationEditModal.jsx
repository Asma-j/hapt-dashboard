/* eslint-disable react/destructuring-assignment */
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { capitaliseString } from '../../../utils/tools';
import { editFormation, getAllFormations } from '../../../actions/formations';
import { getAllTrainers } from '../../../actions/trainers';

class FormationEditModal extends Component {
  constructor(props) {
    super(props);
    this.handleOpenClose = this.handleOpenClose.bind(this);
    this.state = {
      isOpen: false,
      title: null
    };
  }

  componentWillMount() {
    this.props.getAllTrainers();
  }

  handleChangeTitle = event => {
    this.setState({
      title: capitaliseString(event.target.value)
    });
  };

  handleOnSubmit = async event => {
    const { title } = this.state;
    event.preventDefault();
    this.props.editFormation({ _id: this.props.formation._id, title: capitaliseString(title) });
    this.props.getAllFormations();
    this.setState({ isOpen: false });
  };

  handleOpenClose() {
    const { formation } = this.props;
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      title: formation.title
    }));
  }

  render() {
    const { isOpen, title } = this.state;
    const { formation } = this.props;
    return (
      <Fragment>
        <Button color="warning" size="sm" onClick={this.handleOpenClose} outline>
          <FontAwesomeIcon icon="edit" /> Edit
        </Button>
        <Modal isOpen={isOpen} toggle={this.handleOpenClose}>
          <ModalHeader className="bg-warning" toggle={this.handleOpenClose}>
            <b>Edit formation:</b> {formation.title}
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
              <Button type="submit" color="warning" disabled={!title}>
                <FontAwesomeIcon icon="edit" /> Edit
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = store => ({
  formations: store.formations,
  trainers: store.trainers
});

const mapDispatchToProps = {
  editFormation,
  getAllFormations,
  getAllTrainers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormationEditModal);
