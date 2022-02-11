import React, { useState } from "react";
import {
  Nav,
  NavItem,
  NavbarBrand,
  NavLink,
  Navbar,
  Collapse,
  NavbarToggler
} from "reactstrap";
export default function NavApp() {
  const [isOpen, setIsOpen] = useState(false);
  function toggle() {
    setIsOpen(!isOpen);
  }
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">CredConsulting</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse navbar isOpen={isOpen}>
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
