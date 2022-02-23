import React from 'react'
import { NavLink } from 'react-router-dom'
import {NavDropdown,Navbar,Nav,Container,} from 'react-bootstrap'
export default function Header() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
  <Container>
    <Navbar.Brand to="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavLink to="/">project2</NavLink>
        <NavLink to="/project1">Project1</NavLink>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item to="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item to="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item to="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item to="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}
