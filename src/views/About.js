import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Jumbotron,Card, Col, Button } from 'react-bootstrap'
import IC502 from '../assets/ic_502_01.jpg'
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

export const About = () =>  (
    <Styles>
      <Container>
        <Jumbotron>
        <h1>JJ1POW局について</h1>
        <p>以下にいろいろご説明します。</p>
        <br />
        </Jumbotron>
        <Row>
            <Col sm>
                <Card>
                  <Card.Body>
                    <Card.Title>JJ1POW局について</Card.Title>
                    <Card.Text>OP : ５０代のカムバックハムです。１９８０年頃に２エリアでも局を開いてました。</Card.Text>
                    <Card.Text>QTH : 鎌倉市の浜および山岳エリア、さらに江ノ島や逗子で移動運用しています。自宅は江ノ電極楽寺駅近くです。</Card.Text>
                    <Card.Text>JARL : 本局はJARL非会員です。</Card.Text>
                    <Card.Text>QRZ.com : 本局は登録しています。サイト<a href="https://qrz.com">qrz.com</a>にアクセスしてください。</Card.Text>
                    <Card.Text>e-mailによる連絡 : jj1pow.jp@gmail.com</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
            </Col>
            <Col sm>
            <Card>
                  <Card.Body>
                    <Card.Title>ハムラジ装置について</Card.Title>
                    <Card.Text>周波数/モード/出力：50MHz SSB/CW 3W, 144-430MHz FM 1W, HF All 50W</Card.Text>
                    <Card.Text>リグ：井上電機製作所（ICOM）IC-502,NKT NKT-4G,YAESU FT-857DM</Card.Text>
                    <Card.Text>アンテナ:リグ内蔵のホイップアンテナ、自作ツエップアンテナ</Card.Text>
                    <Card.Text>電源：モバイルバッテリー＋昇圧ブースター</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
            </Col>
        </Row>
        <br />
        <Row>
        <Col sm={6}>
            <Card>
                  <Card.Body>
                    <Card.Title>QSLカードについて</Card.Title>
                    <Card.Text>本局では電子媒体形式(pdf形式)の受信記録カード(QSL Card)の作成を行っております。</Card.Text>
                    <Card.Text>本局はJARL非会員のため、相手局が電子媒体形式のQSLカードを発行している場合のみ、メールにてカード交換を行っています。</Card.Text>
                    <Card.Text>例：</Card.Text>
                    <Card.Text>・本局から相手局のJARLのメールアドレスに、本局QSLカードを送付してメール送信します。その返信メールで相手局から電子媒体のQSLカードを受信します。</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
            </Col>
        </Row>
      </Container>
      <br />
      <br />
    </Styles>
)
