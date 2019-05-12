/* eslint-disable react/destructuring-assignment, no-nested-ternary */
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Container, Table, Card, CardBody, ButtonGroup } from 'reactstrap';
import { getAllTrainers } from '../../actions/trainers';
import Header from '../molecules/Header';
import Footer from '../molecules/Footer';
import TrainerAddModal from '../molecules/modals/TrainerAddModal';
import TrainerDeleteModal from '../molecules/modals/TrainerDeleteModal';
import TrainerEditModal from '../molecules/modals/TrainerEditModal';

class TrainersPage extends Component {
  componentDidMount() {
    this.props.getAllTrainers();
  }

  render() {
    const { trainers } = this.props;
    return (
      <Fragment>
        <Header />
        <Container style={{ padding: '2vh' }}>
          <Card>
            <CardBody>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <h2>Trainers</h2>
                  <h6 className="text-muted">Our trainers information.</h6>
                </div>
                <div>
                  <TrainerAddModal />
                </div>
              </div>
              <Table bordered striped hover responsive>
                <thead>
                  <tr>
                    <th>CIN</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Tel</th>
                    <th style={{ textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {!trainers ? (
                    <tr>
                      <td colSpan="5" style={{ textAlign: 'center' }}>
                        Loading...
                      </td>
                    </tr>
                  ) : trainers.length > 0 ? (
                    trainers.map(trainer => (
                      <tr key={trainer._id}>
                        <td>{trainer.cin.toString().padStart(8, '0')}</td>
                        <td>{trainer.firstName} </td>
                        <td>{trainer.lastName}</td>
                        <td>{trainer.email}</td>
                        <td>{trainer.tel}</td>
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
  trainers: store.trainers
});

const mapDispatchToProps = {
  getAllTrainers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainersPage);
