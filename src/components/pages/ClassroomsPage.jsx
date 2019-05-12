/* eslint-disable react/destructuring-assignment, no-nested-ternary */
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Container, Table, Card, CardBody, ButtonGroup } from 'reactstrap';
import { getAllClassrooms } from '../../actions/classrooms';
import Header from '../molecules/Header';
import Footer from '../molecules/Footer';
import ClassroomAddModal from '../molecules/modals/ClassroomAddModal';
import ClassroomDeleteModal from '../molecules/modals/ClassroomDeleteModal';
import ClassroomEditModal from '../molecules/modals/ClassroomEditModal';

class ClassroomsPage extends Component {
  componentDidMount() {
    this.props.getAllClassrooms();
  }

  render() {
    const { classrooms } = this.props;
    return (
      <Fragment>
        <Header />
        <Container style={{ padding: '2vh' }}>
          <Card>
            <CardBody>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <h2>Classrooms</h2>
                  <h6 className="text-muted">Our classrooms information.</h6>
                </div>
                <div>
                  <ClassroomAddModal />
                </div>
              </div>
              <Table bordered striped hover responsive>
                <thead>
                  <tr>
                    <th>Number</th>
                    <th>Title</th>
                    <th>Capacity</th>
                    <th>Description</th>
                    
                    <th style={{ textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {!classrooms ? (
                    <tr>
                      <td colSpan="5" style={{ textAlign: 'center' }}>
                        Loading...
                      </td>
                    </tr>
                  ) : classrooms.length > 0 ? (
                    classrooms.map(classroom => (
                      <tr>
                        <td>{classroom.number.toString().padStart(8, '0')}</td>
                        <td>{classroom.title} </td>
                        <td>{classroom.capacity.toString().padStart(8, '0')}</td>
                        <td>{classroom.description}</td>
                        <td style={{ textAlign: 'right' }}>
                          <ButtonGroup>
                            <ClassroomEditModal classroom={classroom} />
                            <ClassroomDeleteModal classroom={classroom} />
                          </ButtonGroup>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" style={{ textAlign: 'center' }}>
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
  classrooms: store.classrooms
});

const mapDispatchToProps = {
  getAllClassrooms
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassroomsPage);
