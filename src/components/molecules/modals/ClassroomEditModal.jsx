/* eslint-disable react/destructuring-assignment */
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { capitaliseString } from '../../../utils/tools';
import { editClassroom, getAllClassrooms } from '../../../actions/classrooms';

class ClassroomEditModal extends Component {
  constructor(props) {
    super(props);
    this.handleOpenClose = this.handleOpenClose.bind(this);
    this.state = {
      isOpen: false,
      number: null,
      name: null,
      capacity: null,
      description: null,
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    const { number, name, capacity, description} = this.state;
    const { classroom } = this.props;
    this.props.editClassroom({
      _id: classroom._id,
      number,
      name: capitaliseString(name),
      capacity,
      description: capitaliseString(description)
    });
    this.props.getAllClassrooms();
    this.setState({ isOpen: false });
  };

  handleOpenClose() {
    const { classroom } = this.props;
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      number: classroom.number,
      name: classroom.name,
      capacity: classroom.capacity,
      description: classroom.description
    }));
  }

  render() {
    const { isOpen, number, name, capacity, description} = this.state;
    return (
      <Fragment>
        <Button color="warning" size="sm" onClick={this.handleOpenClose} outline>
          <FontAwesomeIcon icon="plus" /> Edit
        </Button>
        <Modal isOpen={isOpen} toggle={this.handleOpenClose}>
          <ModalHeader className="bg-warning" toggle={this.handleOpenClose}>
            <b>Add classroom</b>
          </ModalHeader>
          <Form onSubmit={this.handleOnSubmit}>
            <ModalBody>
            <FormGroup>
                <Label for="number">Number</Label>
                <Input
                  disabled
                  type="number"
                  name="number"
                  id="number"
                  value={number}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter the Title.."
                  value={name}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="capacity">Capacity</Label>
                <Input
                  type="number"
                  name="capacity"
                  id="capacity"
                  placeholder="Enter the Capacity.."
                  value={capacity}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Enter the Description.."
                  value={description}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.handleOpenClose}>
                Cancel
              </Button>
              <Button type="submit" color="warning" disabled={!number || !name || !capacity}>
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
  classrooms: store.classrooms
});

const mapDispatchToProps = {
  editClassroom,
  getAllClassrooms
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassroomEditModal);
