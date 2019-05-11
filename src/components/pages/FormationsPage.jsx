/* eslint-disable react/destructuring-assignment, no-nested-ternary */
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Container, Table, Card, CardBody, ButtonGroup } from 'reactstrap';
import { getAllFormations } from '../../actions/formations';
import Header from '../molecules/Header';
import Footer from '../molecules/Footer';
import FormationAddModal from '../molecules/modals/FormationAddModal';
import FormationEditModal from '../molecules/modals/FormationEditModal';
import FormationDeleteModal from '../molecules/modals/FormationDeleteModal';
import CourseAddModal from '../molecules/modals/CourseAddModal';

class FormationsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formations: null
    };
  }

  async componentDidMount() {
    await this.props.getAllFormations();
    this.setState({
      formations: this.props.formations
    });
  }

  render() {
    const { formations } = this.state;
    return (
      <Fragment>
        <Header />
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
                      <tr key={formation._id}>
                        <td>{formation.number.toString().padStart(4, '0')}</td>
                        <td>{formation.title}</td>
                        <td>
                          {formation.course && formation.course.length > 1
                            ? formation.course.map(cour => `${cour.title}, `)
                            : 'No courses for this training...'}
                        </td>
                        <td style={{ textAlign: 'right' }}>
                          <ButtonGroup>
                            <FormationEditModal formation={formation} />
                            <CourseAddModal formations={formations} formation={formation} />
                            <FormationDeleteModal formation={formation} />
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

const mapStateToProps = store => ({
  formations: store.formations
});

export default connect(
  mapStateToProps,
  { getAllFormations }
)(FormationsPage);
