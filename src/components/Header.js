import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Header(props) {
  const signOut = (e) => {
    e.preventDefault();
    props.sessionUpdate(false)
    props.getUserName('empty');
  }
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Login/Signup</Navbar.Brand>
          <Nav>
            <Link to="/" onChange={signOut}>Sign out</Link>
            {/* <Nav.Link to="login">Login</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
  )
}
