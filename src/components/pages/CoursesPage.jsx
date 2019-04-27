import React, { Fragment, Component } from "react";
import { Container, Table, Card, CardBody, CardTitle, Button } from "reactstrap";
import { getAllCourses } from "../../api/courses";
import Header from "../molecules/Header";
import Footer from "../molecules/Footer";

class CoursesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: null
    };
  }

  componentDidMount() {
    setTimeout(() => {
    this.setState({
        courses: getAllCourses()
    })
    }, 1000)
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Container style={{ padding: "2vh" }}>
          <Card>
            <CardBody>
              <CardTitle>Courses</CardTitle>
              <Table bordered striped hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Tutor</th>
                    <th>Formation</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                    {!this.state.courses ? (
                            <tr><td colSpan="5" style={{ textAlign: 'center' }}>Loading...</td></tr>
                    ) : (
                        this.state.courses.length > 0 ? (
                            this.state.courses.map(course => (
                            <tr>
                                <td>{course.number}</td>
                                <td>{course.title}</td>
                                <td>{`${course.tutor.firstName} ${
                                course.tutor.lastName
                                }`}</td>
                                <td>{course.formation.title}</td>
                                <td>
                                    <Button color="danger" size="sm">
                                    <i className="fas fa-trash"></i>
                                    </Button>
                                </td>
                            </tr>
                            ))
                        ) : (
                            <tr><td colSpan="5" style={{ textAlign: 'center' }}>No data found...</td></tr>
                        )
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
