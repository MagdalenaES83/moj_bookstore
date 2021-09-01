import { Navbar, Nav } from "react-bootstrap";
import { Link, withRouter  } from "react-router-dom";

const MyNavBar = ({ color, history, location, match}) => (
  <Navbar
    id="navbar"
    collapseOnSelect
    expand="lg"
    bg="dark 
    "
    variant="dark"
  >
    <Navbar.Brand >BokHandel</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Link to="/home">
         
        <div 
        // className={
        //     location.pathname === '/home'
        //     ? "nav-link active"
        //     : "nav-link"
        //     }
            
            >Home </div >
        </Link>

        
        <Link to="/booklist">
          <div className="nav-link"> BookList </div>
        </Link>


        <Link to="/sale">
         
          <div className="nav-link">Sale</div>
        </Link>
        <Link to="/contact">
         
         <div className="nav-link">Contact Us</div>
       </Link>
      </Nav>
      <Nav></Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default MyNavBar;
