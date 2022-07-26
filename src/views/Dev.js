import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Jumbotron,Card, Col, Button } from 'react-bootstrap'
//import IC502 from '../assets/ic_502_01.jpg'
import IC502 from '../assets/jj1powRig2.jpeg'
import styled from 'styled-components'


const Styles = styled.div`


  background : url(${IC502}) no-repeat top center;
  background-size: cover;

  .jumbotron {
    background-color: rgba(245, 245, 245, 0.4);
  }

  .card {
    background-color: rgba(245, 245, 245, 0.7); 
  }
  }
`;

export const Dev = () =>  (
    <Styles>
      <Container>
        <Jumbotron>
        <h1>開発中です</h1>
        <p>開発中のプログラムがあります</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        </Jumbotron>
      </Container>
      <br />
      <br />
    </Styles>
)
