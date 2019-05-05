import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { capitaliseString } from '../../../utils/tools';
import { editCourse } from '../../../actions/courses';
import { getAllTrainers } from '../../../actions/trainers';
import { getAllFormations } from '../../../actions/formations';

class CourseEditModal extends Component {
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

  handleChangeTitle = event => {
    this.setState({
      title: capitaliseString(event.target.value)
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleOnSubmit = async event => {
    const { title, tutor, formation } = this.state;
    event.preventDefault();
    await this.props.editCourse({ title, tutor, formation });
  };

  handleOpenClose() {
    const { course } = this.props;
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      title: course.title,
      tutor: course.tutor.number,
      formation: course.formation.number
    }));
  }

  render() {
    const { isOpen, title, tutor, formation } = this.state;
    const { course, trainers, formations } = this.props;
    return (
      <Fragment>
        <Button color="warning" size="sm" onClick={this.handleOpenClose} outline>
          <FontAwesomeIcon icon="edit" /> Edit
        </Button>
        <Form onSubmit={this.handleOnSubmit}>
          <Modal isOpen={isOpen} toggle={this.handleOpenClose}>
            <ModalHeader className="bg-warning" toggle={this.handleOpenClose}>
              <b>Edit course:</b> {course.title}
            </ModalHeader>
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
                <Input
                  type="select"
                  name="tutor"
                  id="tutor"
                  placeholder="Enter the course's tutor.."
                  value={tutor}
                  onChange={this.handleChange}
                >
                  {trainers.map(trainer => (
                    <option value={trainer.number}>
                      {trainer.firstName} {trainer.lastName}
                    </option>
                  ))}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="formation">Formation</Label>
                <Input
                  type="select"
                  name="formation"
                  id="formation"
                  placeholder="Enter the course title.."
                  value={formation}
                  onChange={this.handleChange}
                >
                  {formations.map(forma => (
                    <option value={forma.number}>{forma.title}</option>
                  ))}
                </Input>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.handleOpenClose}>
                Cancel
              </Button>
              <Button type="submit" color="warning" disabled={!title || !tutor || !formation}>
                <FontAwesomeIcon icon="edit" /> Edit
              </Button>
            </ModalFooter>
          </Modal>
        </Form>
      </Fragment>
    );
  }
}

const mapStateToProps = store => ({
  formations: store.formations,
  trainers: store.trainers
});

export default connect(
  mapStateToProps,
  { editCourse, getAllFormations, getAllTrainers }
)(CourseEditModal);
