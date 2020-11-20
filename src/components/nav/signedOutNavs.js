import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
//import { Link } from 'react-router-dom'


const SignedOutNavs = ({...props}) => {

    return(
        <div>
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">HOME</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">SIGN IN</Nav.Link>
      <Nav.Link href="/register">SIGN UP</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>

        </div>
    )
}

export default SignedOutNavs