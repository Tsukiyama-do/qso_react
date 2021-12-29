import React from 'react'  
import {  Navbar } from 'react-bootstrap' 
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

export const Footer = () => (
    <Styles>
      <Navbar  expand="lg" bg="dark" fixed="bottom">
          <Navbar.Brand href="/">Copyright &copy; JJ1POW 2022</Navbar.Brand>
      </Navbar>

    </Styles>
  
)