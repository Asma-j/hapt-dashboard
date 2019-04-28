/* eslint-disable no-nested-ternary */

import React, { Fragment, Component } from 'react';
import { Container, Table, Card, CardBody, Button } from 'reactstrap';
import { getAllformations } from '../../api/formations';
import Header from '../molecules/Header';
import Footer from '../molecules/Footer';
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
      formations: getAllformations(),
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
                  <h2>Formations</h2>
                  <h6 className="text-muted" />
                </div>
                <div>
                  <Button color="success" outline onClick="addformation()">
                    <i className="fas fa-plus" /> Add Formation
                  </Button>
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
                  {!this.state.formations ? (
                    <tr>
                      <td colSpan="5" style={{ textAlign: 'center' }}>
                        Loading...
                      </td>
                    </tr>
                  ) : this.state.formations.length > 0 ? (
                    this.state.formations.map(formation => (
                      <tr>
                        <td>{formation.number.toString().padStart(4, '0')}</td>
                        <td>{formation.title}</td>
                        <td>{`${formation.tutor.firstName} ${formation.tutor.lastName}`}</td>
                        <td>{formation.cours.map(cour => cour.title + ', ')}</td>
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

export default FormationsPage;
