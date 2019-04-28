import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import BrandLogo from '../atoms/BrandLogo';
import UserDefaultAvatar from '../../assets/images/user-13.svg';

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    const { user } = this.props;
    const { isOpen } = this.state;
    return (
      <Navbar color="light" light expand="md" className="shadow-1">
        <NavbarBrand tag={Link} to="/">
          <BrandLogo />
        </NavbarBrand>
        {user && (
          <Fragment>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="/">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/settings">
                    Settings
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/account">
                    |
                    <img src={user.avatar || UserDefaultAvatar} alt="User Avatar" className="img-avatar" />
                    {user.firstName}
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

export default Header;
