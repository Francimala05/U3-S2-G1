import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function CollapsibleExample() {
  return (
    <Navbar  collapseOnSelect  expand="lg" className="bg-body-tertiary">
      <Container  style= {{backgroundColor: 'red',}}>
        <Navbar.Brand href="#">EpiBooks!</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>   
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;


