import React, { useState } from "react";
import {
  Nav,
  NavItem,
  NavbarBrand,
  Navbar,
  Collapse,
  NavbarToggler
} from "reactstrap";
import { NavLink } from "react-router-dom";
export default function NavApp() {
  const [isOpen, setIsOpen] = useState(false);
  function toggle() {
    setIsOpen(!isOpen);
  }
  return (
    <Navbar color="dark" dark expand="md" className="container-fluid fixed-top">
      {/* <div className="container-fluid"> */}
      <NavbarToggler onClick={toggle} />
      <Collapse navbar isOpen={isOpen}>
        <Nav navbar>
          <NavItem>
            <NavLink to="/" />
            <NavLink className="nav-link" to="/About">
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/Contact">
              Contact Us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/Insights">
              Insight
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link me-2" to="/Service">
              Service
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
      <NavbarBrand href="/" className="me-5">
        CredConsulting
      </NavbarBrand>
      {/* </div> */}
    </Navbar>
  );
}
