import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar>
      <Container className="justify-content-between">
        <Nav>
          <Link to="/" className="nav-link text-white">
            pokemones 🏠
          </Link>
          <Link to="/home" className="nav-link text-white">
            home 📒
          </Link>
        </Nav>
      </Container>
      

    </Navbar>
  );
};

export default Navigation;