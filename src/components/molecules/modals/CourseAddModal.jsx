/* eslint-disable no-nested-ternary,react/destructuring-assignment */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { capitaliseString } from '../../../utils/tools';
import { addCourse, getAllCourses } from '../../../actions/courses';
import { getAllTrainers } from '../../../actions/trainers';
import { getAllFormations } from '../../../actions/formations';

class CourseAddModal extends Component {
  constructor(props) {
    super(props);
    this.handleOpenClose = this.handleOpenClose.bind(this);
    this.state = {
      isOpen: false,
      title: null,
      tutor: null,
      formation: null
    };
  }

  componentWillMount() {
    this.props.getAllFormations();
    this.props.getAllTrainers();
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
   * @description This method makes it straightforward to modify any user input.
   * @param event launched on form changing.
   */
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  /**
   * @description This method save the new data and prevent the default page refresh.
   * @param event launched on form submitting.
   */
  handleOnSubmit = async event => {
    event.preventDefault();
    const { title, tutor, formation } = this.state;
    await this.props.addCourse({ title, tutor, formation });
    if (this.props.formation) {
      await this.props.getAllFormations();
    } else {
      await this.props.getAllCourses();
    }
    this.setState({ isOpen: false });
  };

  handleOpenClose() {
    const { formations, formation } = this.props;
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      title: '',
      tutor: '',
      formation: formation ? formation._id : formations && formations.length > 0 ? formations[0]._id : ''
    }));
  }

  render() {
    const { isOpen, title, tutor, formation } = this.state;
    const { formation: selectedFormation, trainers, formations } = this.props;
    return (
      <Fragment>
        <Button color="success" size={selectedFormation ? 'sm' : ''} onClick={this.handleOpenClose} outline>
          <FontAwesomeIcon icon="plus" /> Add course
        </Button>
        <Modal isOpen={isOpen} toggle={this.handleOpenClose}>
          <ModalHeader className="bg-success" toggle={this.handleOpenClose}>
            <b>Add course</b>
          </ModalHeader>
          <Form onSubmit={this.handleOnSubmit}>
            <ModalBody>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Enter the course's title.."
                  value={title}
                  onChange={this.handleChangeTitle}
                />
              </FormGroup>
              <FormGroup>
                <Label for="tutor">Tutor</Label>
                <Input type="select" name="tutor" id="tutor" value={tutor} onChange={this.handleChange}>
                  {trainers.map(t => (
                    <option key={t._id} value={t._id}>
                      {t.firstName} {t.lastName}
                    </option>
                  ))}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="formation">Formation</Label>
                <Input
                  type="select"
                  name="formation"
                  id="title"
                  disabled={selectedFormation}
                  value={formation}
                  onChange={this.handleChange}
                >
                  {formations.map(f => (
                    <option key={f._id} value={f._id}>
                      {f.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.handleOpenClose}>
                Cancel
              </Button>
              <Button color="success" type="submit" disabled={!title || !tutor || !formation}>
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
  formations: store.formations,
  trainers: store.trainers
});

const mapDispatchToProps = {
  getAllFormations,
  getAllTrainers,
  getAllCourses,
  addCourse
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseAddModal);
