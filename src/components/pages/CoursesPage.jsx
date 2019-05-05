/* eslint-disable no-nested-ternary */
import React, { Fragment, Component } from 'react';
import { Container, Table, Card, CardBody, ButtonGroup } from 'reactstrap';
import { getAllCourses } from '../../api/courses';
import Header from '../molecules/Header';
import Footer from '../molecules/Footer';
import CourseAddModal from '../molecules/modals/CourseAddModal';
import CourseEditModal from '../molecules/modals/CourseEditModal';
import CourseDeleteModal from '../molecules/modals/CourseDeleteModal';

const user = {
  firstName: 'malek'
};
class CoursesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: null
    };
  }

  componentWillMount() {
    this.setState({
      courses: getAllCourses()
    });
  }

  render() {
    const { courses } = this.state;
    return (
      <Fragment>
        <Header />
        <Container style={{ padding: '2vh' }}>
          <Card>
            <CardBody>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <h2>Courses</h2>
                  <h6 className="text-muted">Our subject guides include information.</h6>
                </div>
                <CourseAddModal />
              </div>
              <Table bordered striped hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Tutor</th>
                    <th>Formation</th>
                    <th style={{ textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {!courses ? (
                    <tr>
                      <td colSpan="5" style={{ textAlign: 'center' }}>
                        Loading...
                      </td>
                    </tr>
                  ) : courses.length > 0 ? (
                    courses.map(course => (
                      <tr>
                        <td>{course.number.toString().padStart(4, '0')}</td>
                        <td>{course.title}</td>
                        <td>{`${course.tutor.firstName} ${course.tutor.lastName}`}</td>
                        <td>{course.formation.title}</td>
                        <td style={{ textAlign: 'right' }}>
                          <ButtonGroup>
                            <CourseEditModal course={course} />
                            <CourseDeleteModal course={course} />
                          </ButtonGroup>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" style={{ textAlign: 'center' }}>
                        No data found...
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

export default CoursesPage;
