/* eslint-disable react/destructuring-assignment */
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { capitaliseString } from '../../../utils/tools';
import { editTrainer, getAllTrainers } from '../../../actions/trainers';

class TrainerEditModal extends Component {
  constructor(props) {
    super(props);
    this.handleOpenClose = this.handleOpenClose.bind(this);
    this.state = {
      isOpen: false,
      firstName: null,
      lastName: null,
      email: null
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    const { firstName, lastName, email } = this.state;
    const { trainer } = this.props;
    this.props.editTrainer({
      _id: trainer._id,
      firstName: capitaliseString(firstName),
      lastName: capitaliseString(lastName),
      email
    });
    this.props.getAllTrainers();
    this.setState({ isOpen: false });
  };

  handleOpenClose() {
    const { trainer } = this.props;
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      firstName: trainer.firstName,
      lastName: trainer.lastName,
      email: trainer.email
    }));
  }

  render() {
    const { isOpen, firstName, lastName, email } = this.state;
    return (
      <Fragment>
        <Button color="warning" onClick={this.handleOpenClose} outline>
          <FontAwesomeIcon icon="plus" /> Add trainer
        </Button>
        <Modal isOpen={isOpen} toggle={this.handleOpenClose}>
          <ModalHeader className="bg-warning" toggle={this.handleOpenClose}>
            <b>Add trainer</b>
          </ModalHeader>
          <Form onSubmit={this.handleOnSubmit}>
            <ModalBody>
              <FormGroup>
                <Label for="firstName">Firstname</Label>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter the Firstname.."
                  value={firstName}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="lastname">Lastname</Label>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter the Lastname.."
                  value={lastName}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter an email.."
                  value={email}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.handleOpenClose}>
                Cancel
              </Button>
              <Button type="submit" color="warning" disabled={!firstName || !lastName || !email}>
                Add
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = store => ({
  trainers: store.trainers
});

export default connect(
  mapStateToProps,
  { editTrainer, getAllTrainers }
)(TrainerEditModal);
