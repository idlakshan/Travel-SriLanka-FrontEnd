import React from 'react'
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap'
import homeImg1 from './../assets/images/home-img-1.jpg'
import homeImg2 from './../assets/images/home-img-2.jpg'
import homeVideo from './../assets/images/video.mp4'
import experinceImg from './../assets/images/experience.png'
import Subtitle from '../shared/Subtitle'
import sriLankaImg from './../assets/images/srilanka.png'
import SearchBar from '../shared/SearchBar'
import ServicesList from '../Services/ServicesList'
import FeaturedTourList from '../featuredTours/FeaturedTourList'
import MasonryImagesgallery from '../components/image-gallery/MasonryImagesgallery'

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

      {/* ------------Fearured Section------------ */}

      <section>
      <Container>
          <Row>
            <Col lg='12' className='mb5'>
              <Subtitle subtitle={'Explore'}/>
                    <h2 className='featured__tour-title'>Our featured tours</h2>
            </Col>
            <FeaturedTourList/>
          </Row>
      </Container>

    </section>

      {/* ------------Experience Section------------ */}

      <section>
        <Container>
          <Row>
            <Col lg="6">
            <div className="experience__content">
              <Subtitle subtitle={"Experience"}/>
              <h2>With our all experience <br/> we will serve you</h2>
              <p>Discover unforgettable moments on our curated tours.<br/> Immerse yourself in culture, adventure, and authentic experiences.<br/>
                 Each journey is a unique chapter in your travel story,<br/> promising meaningful connections and cherished memories</p>
            </div>

            <div className='counter__wrapper d-flex align-items-center gap-5'>
              <div className='counter__box'>
                <span>5k+</span>
                 <h6>Successful Trip</h6>
              </div>

              <div className='counter__box'>
                <span>1k+</span>
                 <h6>Regular Clients</h6>
              </div>

              <div className='counter__box'>
                <span>4</span>
                 <h6>Years experience</h6>
              </div>

            </div>
            </Col>
            <Col lg="6">
            <div className="experince__img">
              <img src={experinceImg} alt="" />
            </div>
            </Col>
          </Row>
        </Container>
      </section>

        {/* ------------Gallery Section------------ */}

        <section>
          <Container>
            <Row>
              <Col lg="12">
                <Subtitle subtitle={"Gallery"}/>
                <h2 className="gallery__title">
                  Visit our Customers tour gallery
                </h2>
              </Col>
              <Col lg="12">
                <MasonryImagesgallery/>
              </Col>
            </Row>
          </Container>
        </section>

    </>
  )
}

export default Home