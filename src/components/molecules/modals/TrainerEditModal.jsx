import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

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

  handleOnSubmit = async event => {
    const { firstName, lastName, email } = this.state;
    event.preventDefault();
    await this.editTrainer({ firstName, lastName, email });
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
    const { trainer } = this.props;
    return (
      <div>
        <Button color="warning" size="sm" onClick={this.handleOpenClose} outline>
          <i className="fas fa-edit" /> Edit Trainer
        </Button>
        <Modal isOpen={isOpen} toggle={this.handleOpenClose}>
          <ModalHeader className="bg-warning" toggle={this.handleOpenClose}>
            <b>Edit trainer:</b> {trainer.firstName} {trainer.lastName}
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="firstname">Firstname</Label>
                <Input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Enter the Firstname.."
                  value={firstName}
                  onChange={this.handleChangeTitle}
                />
              </FormGroup>
              <FormGroup>
                <Label for="lastname">Lastname</Label>
                <Input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Enter the Lastname.."
                  value={lastName}
                  onChange={this.handleChangeTitle}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter the Email.."
                  value={email}
                  onChange={this.handleChangeTitle}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.handleOpenClose}>
              Cancel
            </Button>
            <Button color="warning" onClick={this.handleOpenClose}>
              Edit
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default TrainerEditModal;
