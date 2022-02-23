import React from 'react'
import { NavLink } from 'react-router-dom'
import {NavDropdown,Navbar,Nav,Container} from 'react-bootstrap'
export default function Mainnavigation() {
  return (
    <> <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand to="#">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink to="/addNewMeetup">AddNewMeetup</NavLink>
          <NavLink to="/favourite">Favouririte</NavLink>
          <NavLink to="/allMeetup">All New Meetup</NavLink>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar></>
  )
}
