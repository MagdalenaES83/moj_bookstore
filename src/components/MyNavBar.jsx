import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavBar = (props) => (
  <Navbar
    id="navbar"
    collapseOnSelect
    expand="lg"
    bg="dark 
    "
    variant="dark"
  >
    <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Link to="/">
          {" "}
          <Nav.Link href="#">HOME </Nav.Link>
        </Link>
        <Link to="/covers">
          <Nav.Link href="#">ABOUT </Nav.Link>{" "}
        </Link>
        <Link to="/list">
          {" "}
          <Nav.Link href="#">BROWSE</Nav.Link>
        </Link>
      </Nav>
      <Nav></Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default MyNavBar;
