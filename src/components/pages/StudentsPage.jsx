import React, { Fragment, Component } from 'react';
import { Container, Table, Card, CardBody, Button } from 'reactstrap';
import { getAllStudents } from '../../api/students';
import Header from '../molecules/Header';
import Footer from '../molecules/Footer';



const user = {
  firstName: "Malek",
  lastrName: "Boubakri",
  avatar: "https://avatars0.githubusercontent.com/u/22925467?s=460&v=4"
}




class StudentsPage extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      students: null,
      currentUser: null

    });
  }

  componentWillMount() {
    this.setState({
      students: getAllStudents(),
      currentUser: user

    });
  }

  render() {
    const { currentUser } = this.state
    return (
      <Fragment>
        <Header user={currentUser} />
        <Container style={{ padding: '2vh' }}>
          <Card>
            <CardBody>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <h2>Students</h2>
                  <h6 className="text-muted">Our subject guides include information.</h6>
                </div>
                <div>
                  <Button color="success" outline>
                    <i className="fas fa-plus" /> Add user
                  </Button>
                </div>
              </div>
              <Table bordered striped hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>Email</th>
                    <th style={{ textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {!this.state.students ? (
                    <tr>
                      <td colSpan="5" style={{ textAlign: 'center' }}>
                        Loading...
                      </td>
                    </tr>
                  ) : this.state.students.length > 0 ? (
                    this.state.students.map(student => (
                      <tr>
                        <td>{student.number.toString().padStart(1, '0')}</td>

                        <td>{student.student.firstName} </td>
                        <td>{student.student.lastName}</td>
                        <td>{student.email}</td>
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

export default StudentsPage;
