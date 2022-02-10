import {
  Nav,
  NavItem,
  NavbarBrand,
  NavLink,
  Navbar,
  Collapse,
  NavbarToggler
} from "reactstrap";
export default function Header() {
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand className="me-auto" href="/">
        CredConsulting
      </NavbarBrand>
      <NavbarToggler className="me-2" onClick={function noRefCheck() {}} />
      <Collapse navbar className="me-2">
        <Nav navbar>
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
