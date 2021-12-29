import React from 'react'
import { Link } from 'react-router-dom'
import { Button,Carousel } from 'react-bootstrap'
import ImgHeader from '../assets/header.jpg'
import ImgRig from '../assets/Rig_Inamura2.jpg'


export const Home = () =>  {
  return (
    <div>
      <div>
      <Button variant="primary" size="lg" block onClick={() => alert(`本局のオンエアーをキャッチするのは難しいのです。最近はさぼっています。430MHzハンディばかりです。まるで幽霊部員みたいな局で、しかもJARL非会員。デジ簡無線に手を出そうかと考えたりしてます。駅前QRVオンリーにしようかな。`)}  >JJ1POW局へようこそ（プッシュしてね）
      </Button> 
      </div>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ImgHeader}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>JJ1POW局は移動専門</h3>
            <p>ここ稲村ヶ崎からはEスポ発生時にときどきオンエアします</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ImgRig}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>JJ1POW局のQRPリグ</h3>
            <p>このIC-502が中心リグになります。アナログ機なので周波数カウンタが必要なんです</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <nav>
        <Link to="/about">About</Link>
      </nav>

    </div>
  )
}
