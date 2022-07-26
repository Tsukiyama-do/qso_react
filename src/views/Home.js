import React from 'react'
import { Link } from 'react-router-dom'
import { Button,Carousel } from 'react-bootstrap'
// import ImgHeader from '../assets/header.jpg'
// import ImgHeader2 from '../assets/Rig_20220621a.JPG'
import ImgHeader2 from '../assets/jj1powRig2.jpeg'
import ImgRig from '../assets/Rig_Inamura2.jpg'


export const Home = () =>  {
  return (
    <div>
      <div>
      <Button variant="primary" size="lg" block onClick={() => alert(`本局のオンエアーをキャッチするのは難しいのです。まるで幽霊部員みたいな局で、しかもJARL非会員。最近は中華SDR機と中古のループANTで40mあたりでCWを試みてます。`)}  >JJ1POW局へようこそ（プッシュしてね）
      </Button> 
      </div>

      <Carousel>
        <Carousel.Item>
          {/* <img
            className="d-block w-100"
            src={ImgHeader}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>JJ1POW局は移動専門</h3>
            <p>ここ稲村ヶ崎からはEスポ発生時にときどきオンエアします</p>
          </Carousel.Caption> */}
          <img
            className="d-block w-100"
            src={ImgHeader2}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>JJ1POW局はQRP</h3>
            <p>めずらしいリグで運用しています</p>
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
            <p>このIC-502はデジタル表示がないため、周波数カウンタが必要なんです</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <nav>
        <Link to="/about">About</Link>
      </nav>

    </div>
  )
}
