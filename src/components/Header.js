import React from 'react'  
import { Nav, Navbar } from 'react-bootstrap' 
import styled from 'styled-components'

const Styles = styled.div`
  .navbar {
    background-color : #222;
    text-align: center;
    padding :  10px;
  }

  .navbar-brand, .nav-item .nav-link {
    color : #fff;
    padding-right: 5px;
    text-decoration: none;
    &:hover {
      color : blue;
    }
  }
`;

export const Header = () => (
    <Styles>
      <Navbar  expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">JJ1POW, STATION</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="mr-auto">
              <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="/pictures">Pictures</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="/history">History</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="/english">English</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="/dev">Dev</Nav.Link></Nav.Item>
            </Nav>
          </Navbar.Collapse>
      </Navbar>

    </Styles>
  
)