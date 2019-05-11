/* eslint-disable react/destructuring-assignment */
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { capitaliseString } from '../../../utils/tools';
import { addTrainer, getAllTrainers } from '../../../actions/trainers';
import { addFormation, getAllFormations } from '../../../actions/formations';

class TrainerAddModal extends Component {
  constructor(props) {
    super(props);
    this.handleOpenClose = this.handleOpenClose.bind(this);
    this.state = {
      isOpen: false,
      firstName: null,
      lastName: null,
      email: null,
      tel: null,
      cin: null
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    const { firstName, lastName, email, tel, cin } = this.state;
    this.props.addTrainer({
      firstName: capitaliseString(firstName),
      lastName: capitaliseString(lastName),
      email,
      tel,
      cin
    });
    this.props.getAllTrainers();
    this.setState({ isOpen: false });
  };

  handleOpenClose() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      firstName: '',
      lastName: '',
      email: '',
      tel: '',
      cin: ''
    }));
  }

  render() {
    const { isOpen, firstName, lastName, email, tel, cin } = this.state;
    return (
      <Fragment>
        <Button color="success" onClick={this.handleOpenClose} outline>
          <FontAwesomeIcon icon="plus" /> Add trainer
        </Button>
        <Modal isOpen={isOpen} toggle={this.handleOpenClose}>
          <ModalHeader className="bg-success" toggle={this.handleOpenClose}>
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
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter an email.."
                  value={email}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="tel">Phone</Label>
                <Input
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="Enter an tel. number.."
                  value={tel}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="cin">Phone</Label>
                <Input
                  type="number"
                  name="cin"
                  id="cin"
                  placeholder="Enter a C.I.N number.."
                  value={cin}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.handleOpenClose}>
                Cancel
              </Button>
              <Button type="submit" color="success" disabled={!firstName || !lastName || !email}>
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

const mapDispatchToProps = {
  addTrainer,
  getAllTrainers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainerAddModal);
