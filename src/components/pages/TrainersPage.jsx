/* eslint-disable react/destructuring-assignment, no-nested-ternary */
import React, { Fragment, Component } from 'react';
import { Container, Table, Card, CardBody, ButtonGroup } from 'reactstrap';
import { getAllTrainers } from '../../api/trainers';
import Header from '../molecules/Header';
import Footer from '../molecules/Footer';
import TrainerAddModal from '../molecules/modals/TrainerAddModal';
import TrainerEditModal from '../molecules/modals/TrainerEditModal';
import TrainerDeleteModal from '../molecules/modals/TrainerDeleteModal';

const user = {
  firstName: 'Malek',
  lastrName: 'Boubakri',
  avatar: 'https://avatars0.githubusercontent.com/u/22925467?s=460&v=4'
};

class TrainersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainers: null,
      currentUser: null
    };
  }

  componentWillMount() {
    this.setState({
      trainers: getAllTrainers(),
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
                  <h2>Trainers</h2>
                  <h6 className="text-muted">Our trainers information.</h6>
                </div>
                <div>
                  <TrainerAddModal user={user} />
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
                  {!this.state.trainers ? (
                    <tr>
                      <td colSpan="5" style={{ textAlign: 'center' }}>
                        Loading...
                      </td>
                    </tr>
                  ) : this.state.trainers.length > 0 ? (
                    this.state.trainers.map(trainer => (
                      <tr>
                        <td>{trainer.number.toString().padStart(1, '0')}</td>
                        <td>{trainer.firstName} </td>
                        <td>{trainer.lastName}</td>
                        <td>{trainer.email}</td>
                        <td style={{ textAlign: 'right' }}>
                          <ButtonGroup>
                            <TrainerEditModal trainer={trainer} />
                            <TrainerDeleteModal trainer={trainer} />
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

export default TrainersPage;