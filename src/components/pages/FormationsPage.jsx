/* eslint-disable no-nested-ternary */

import React, { Fragment, Component } from 'react';
import { Container, Table, Card, CardBody, Button, ButtonGroup } from 'reactstrap';
import { getAllFormations } from '../../api/formations';
import { getAllCourses } from '../../api/courses';
import Header from '../molecules/Header';
import Footer from '../molecules/Footer';
import FormationAddModal from '../molecules/modals/FormationAddModal';
import FormationEditModal from '../molecules/modals/FormationEditModal';

const user = {
  firstName: 'Malek',
  lastrName: 'Boubakri',
  avatar: 'https://avatars0.githubusercontent.com/u/22925467?s=460&v=4'
};
class FormationsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formations: null,
      currentUser: null
    };
  }

  componentWillMount() {
    this.setState({
      formations: getAllFormations(),
      course: getAllCourses(),
      currentUser: user
    });
  }

  render() {
    const { currentUser, formations, course } = this.state;

    return (
      <Fragment>
        <Header user={currentUser} />
        <Container style={{ padding: '2vh' }}>
          <Card>
            <CardBody>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <h2>Formations</h2>
                  <h6 className="text-muted">Our formations guides include information.</h6>
                </div>
                <div>
                  <FormationAddModal />
                </div>
              </div>
              <Table bordered striped hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Tutor</th>
                    <th>Cours</th>
                    <th style={{ textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {!formations ? (
                    <tr>
                      <td colSpan="5" style={{ textAlign: 'center' }}>
                        Loading...
                      </td>
                    </tr>
                  ) : formations.length > 0 ? (
                    formations.map(formation => (
                      <tr>
                        <td>{formation.number.toString().padStart(4, '0')}</td>
                        <td>{formation.title}</td>
                        <td>{`${formation.tutor.firstName} ${formation.tutor.lastName}`}</td>
                        <td>{formation.course.map(cour => cour.title + ', ')}</td>

                        <td style={{ textAlign: 'right' }}>
                          <ButtonGroup>
                            <FormationEditModal formations={formations} />
                            <Button color="success" size="sm" outline>
                              <i className="fas fa-plus" /> Course
                            </Button>
                            <Button color="danger" size="sm" outline>
                              <i className="fas fa-trash" /> Delete
                            </Button>
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

export default FormationsPage;
