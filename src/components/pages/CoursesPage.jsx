/* eslint-disable no-nested-ternary */
import React, { Fragment, Component } from 'react';
import { Container, Table, Card, CardBody, Button } from 'reactstrap';
import { getAllCourses } from '../../api/courses';
import Header from '../molecules/Header';
import Footer from '../molecules/Footer';

const user = {
  firstName: "Malek",
  lastrName: "Boubakri",
  avatar: "data:image/jpeg;base64,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"
}

class CoursesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: null,
      currentUser: null
    };
  }

  componentWillMount() {
    this.setState({
      courses: getAllCourses(),
      currentUser: user
    });
  }

  render() {
    const { currentUser } = this.state;
    return (
      <Fragment>
        <Header user={currentUser} />
        <Container style={{ padding: '2vh' }}>
          <Card>
            <CardBody>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <h2>Courses</h2>
                  <h6 className="text-muted">Our subject guides include information.</h6>
                </div>
                <div>
                  <Button color="success" outline>
                    <i className="fas fa-plus" /> Add course
                  </Button>
                </div>
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
                  {!this.state.courses ? (
                    <tr>
                      <td colSpan="5" style={{ textAlign: 'center' }}>
                        Loading...
                      </td>
                    </tr>
                  ) : this.state.courses.length > 0 ? (
                    this.state.courses.map(course => (
                      <tr>
                        <td>{course.number.toString().padStart(4, '0')}</td>
                        <td>{course.title}</td>
                        <td>{`${course.tutor.firstName} ${course.tutor.lastName}`}</td>
                        <td>{course.formation.title}</td>
                        <td style={{ textAlign: 'right' }}>
                          <Button color="danger" size="sm" outline>
                            <i className="fas fa-trash" /> Delete
                          </Button>
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
