import React from 'react'
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap'
import homeImg1 from './../assets/images/home-img-1.jpg'
import homeImg2 from './../assets/images/home-img-2.jpg'
import homeVideo from './../assets/images/video.mp4'
import Subtitle from '../shared/Subtitle'
import sriLankaImg from './../assets/images/srilanka.png'
import SearchBar from '../shared/SearchBar'
import ServicesList from '../Services/ServicesList'

const Home = () => {
  return (
    <>

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className='hero__content'>
                <div className='hero__subtitle d-flex align-items-center'>
                  <Subtitle subtitle={'Know Before You Go'} />
                  <img src={sriLankaImg} alt='' />
                </div>
                <h1>Traveling opens the door to creating <span className='highlight'> memories</span></h1>
                <p>Each place, and each smile in Sri Lanka has a story to tell.
                  We have so much to share with you, so come along to our island in paradise!</p>
              </div>
            </Col>

            <Col lg='2'>
              <div className='hero__img-box'>
                <img src={homeImg1} alt='' />
              </div>
            </Col>
            <Col lg='2'>
              <div className='hero__img-box mt-4'>
                <video src={homeVideo} alt='' controls />
              </div>
            </Col>
            <Col lg='2'>
              <div className='hero__img-box mt-5'>
                <img src={homeImg2} alt='' />
              </div>
            </Col>
          </Row>
          <SearchBar />
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className='services__subtitle'>What we serve</h5>
              <h2 className='services__title'>We offer our best services</h2>
            </Col>
            <ServicesList/>
          </Row>
        </Container>
      </section>

    </>
  )
}

export default Home