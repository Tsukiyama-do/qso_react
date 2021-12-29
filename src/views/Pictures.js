import React from 'react'
import { Link } from 'react-router-dom'
import { Button,Carousel } from 'react-bootstrap'
import Img1 from '../assets/Rig_Inamura1b.jpg'
import Img2 from '../assets/Rig_Inamura2b.jpg'
import Img3 from '../assets/Rig_Inamura4b.jpg'


export const Pictures = () =>  {
  return (
    <div>

      <Carousel interval={4000} >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img1}
            alt="Img1"
          />
          <Carousel.Caption>
            <h3>Boris Johnson</h3>
            <p>I'd rather be dead in a ditch.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img2}
            alt="Img2"
          />

          <Carousel.Caption>
            <h3>Hillary Clinton</h3>
            <p>Never stop believing that fighting for what's right is worth it.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img3}
            alt="Img3"
          />

          <Carousel.Caption>
            <h3>孤独のグルメ</h3>
            <p>自分にはこのぐらいがちょうどいい。</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br />
      <br />
      <br />
    </div>
  )
}
