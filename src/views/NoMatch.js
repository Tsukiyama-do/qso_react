import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'
import IC502 from '../assets/ic_502_01.jpg'
import styled from 'styled-components'


const Styles = styled.div`


  background : url(${IC502}) no-repeat top center;
  background-size: cover;

  .jumbotron {
    background-color: rgba(245, 245, 245, 0.7);
  }

`;

export const NoMatch = () =>  (
    <Styles>
      <Container>
        <br />
        <Jumbotron>
        <h1>Oops! 迷子になりましたか？ </h1>
        <p> 指定のアドレスはみつかりませんでした。アドレスを再度確認ください。 <br />
             <br />
            <br />
            </p>
        </Jumbotron>
      </Container>
      <br />
      <br />
    </Styles>
)
