/* eslint-disable react/destructuring-assignment, no-nested-ternary */
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Container, Table, Card, CardBody } from 'reactstrap';
import { getAllStudents } from '../../actions/students';
import Header from '../molecules/Header';
import Footer from '../molecules/Footer';
import StudentAddModal from '../molecules/modals/StudentAddModal';
import StudentDeleteModal from '../molecules/modals/StudentDeleteModal';
import StudentEditModal from '../molecules/modals/StudentEditModal';
import { registerUser } from '../../actions/authentication';

class StudentsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: null
    };
  }

  async componentDidMount() {
    await this.props.getAllStudents();
    this.setState({
      students: this.props.students
    });
  }

  render() {
    const { students } = this.state;
    return (
      <Fragment>
        <Header />
        <Container style={{ padding: '2vh' }}>
          <Card>
            <CardBody>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <h2>Students</h2>
                  <h6 className="text-muted">Our students information.</h6>
                </div>
                <div>
                  <StudentAddModal />
                </div>
              </div>
              <Table bordered striped hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th style={{ textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {!students ? (
                    <tr>
                      <td colSpan="5" style={{ textAlign: 'center' }}>
                        Loading...
                      </td>
                    </tr>
                  ) : students.length > 0 ? (
                    students.map(student => (
                      <tr>
                        <td>{student.number.toString().padStart(1, '0')}</td>
                        <td>{student.firstName} </td>
                        <td>{student.lastName}</td>
                        <td>{student.email}</td>
                        <td style={{ textAlign: 'right' }}>
                          <StudentEditModal student={student} />
                          <StudentDeleteModal student={student} />
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

const mapStateToProps = store => ({
  students: store.students
});

const mapDispatchToProps = {
  getAllStudents
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentsPage);
