import { Component } from "react";
import {
  Nav,
  NavItem,
  NavbarBrand,
  NavLink,
  Navbar,
  Collapse,
  NavbarToggler
} from "reactstrap";
class Header extends Component {
  state = {
    isOpen: false
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">CredConsulting</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse navbar isOpen={this.state.isOpen}>
          <Nav navbar className="me-2">
            <NavItem>
              <NavLink href="#">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Contact Us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Header;
