import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar,Container,Nav } from 'react-bootstrap';
const Header = () => {
  return (
    <div>
          <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand>Users</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
      <Nav.Link href="#">  <Link to="/about">About</Link></Nav.Link>
      <Nav.Link href="#"> <Link to="/contact">Contact</Link></Nav.Link>
      {/* <Nav.Link href="#"><Link to="/users/add">Add</Link></Nav.Link>
      <Nav.Link href="#"> <Link to="/users/edit/:id">Edit</Link></Nav.Link> */}
      <Nav.Link href="#"> <Link to="/users/:id"></Link></Nav.Link>
    </Nav>
    </Container>
    
    <Link className="btn btn-outline-light" to="/users/add">Add User</Link>
  </Navbar>
        
      
       
       
        
       

    </div>
  )
}

export default Header