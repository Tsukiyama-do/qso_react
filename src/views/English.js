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

export const English = () =>  (
    <Styles>
      <Container>
        <br />
        <Jumbotron>
        <h1>Welcome to ham radio station of JJ1POW!</h1>
        <p> Thank you for accessing JJ1POW homepage! <br />
            This site was established in January 2019 to provide data of the ham redio station. <br />
            On-air times are not so much for this station, though, I enjoy calling CQs at beaches or tops of near mountains. <br />
            I love to watch Ham radio programs of YouTube and study activities of other stations. <br />
             <br />
            Here is the data of the ham-radio station: <br />
            QTH : Gokurakuji, Kamakura city of Kanagawa Prefecture, JAPAN <br />
            GL : PM95SH,  JCC: #1105 <br />
            Air Bands: Mainly 6 meter/SSB-CW/3W, 0.7meter/FM/1W <br />
            Rigs: IC-502 of ICOM, NKT-4G of NKT, FT-857DM of YAESU <br />
            Antenna : Handheld, Wired <br />
            qrz.com : the station data is registered <br />
            Station Approval date：December 19, 2018</p>
            <br />
            <br />
        </Jumbotron>
      </Container>
      <br />
      <br />
    </Styles>
)
