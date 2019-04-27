import React, { Fragment, Component } from 'react';
import { 
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink  } from 'reactstrap';
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
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    
  render() {
    return (
        <Navbar color="light" light expand="md" className="shadow-1">
          <NavbarBrand href="/">
            <BrandLogo />
          </NavbarBrand>
          {this.props.user && 
            <Fragment>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/settings">Settings</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/account">
                    |
                    <img src={this.props.user.avatar || UserDefaultAvatar} alt="User Avatar" className="img-avatar" />
                    {this.props.user.firstName}</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Fragment>
          }
        </Navbar>
    );
  }
}

export default Header;
