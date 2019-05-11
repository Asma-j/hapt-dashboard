/* eslint-disable react/destructuring-assignment */
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { logoutUser } from '../../actions/authentication';
import BrandLogo from '../atoms/BrandLogo';
import UserDefaultAvatar from '../../assets/images/user-13.svg';

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.onLogout = this.onLogout.bind(this);
    this.state = {
      isOpen: false
    };
  }

  onLogout(e) {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  }

  toggle() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    const { isAuthenticated, user } = this.props.authentication;
    const { isOpen } = this.state;
    return (
      <Navbar color="light" light expand="md" className="shadow-1">
        <NavbarBrand tag={Link} to="/">
          <BrandLogo />
        </NavbarBrand>
        {isAuthenticated ? (
          <Fragment>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="mr-3">
                  <NavLink onClick={this.onLogout}>
                    <FontAwesomeIcon icon="sign-out-alt" />
                  </NavLink>
                </NavItem>
                <NavItem className="mr-3">
                  <NavLink tag={Link} to="/settings" disabled>
                    <FontAwesomeIcon icon="cog" />
                  </NavLink>
                </NavItem>
                <NavItem className="mr-3">
                  <NavLink tag={Link} to="/account">
                    |
                    <img src={user.image || UserDefaultAvatar} alt="User Avatar" className="img-avatar" />
                    {user.firstName}
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Fragment>
        ) : (
          <Fragment>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="mr-3">
                  <NavLink tag={Link} to="/register">
                    <FontAwesomeIcon icon="user-plus" />
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Fragment>
        )}
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({
  authentication: state.authentication
});

const mapDispatchToProps = {
  logoutUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header));
