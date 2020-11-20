import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import { Link } from 'react-router-dom'
const SignedInNavs = ({profile, logout}) => {
    return(
        <>
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/dashboard">Dashboard</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/create" >Add Budget</Nav.Link>
      <Nav.Link href="/budgets" >View Budgets</Nav.Link>
      <Nav.Link href="#logout" onClick={logout} > Logout</Nav.Link>

      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
            
        </>
    )
};


export default SignedInNavs
