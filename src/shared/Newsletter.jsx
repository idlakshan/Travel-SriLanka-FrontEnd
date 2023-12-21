import React from 'react'
import './newsLetter.css'
import { Col, Container, Row } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
    return (
        <section className='newsletter'>
            <Container>
                <Row>
                    <Col lg="6">
                        <div className='newsletter__content'>
                            <h2>Subscribe now to get useful traveling information</h2>

                            <div className="newsletter__input">
                                <input type="email" placeholder='Enter your email' />
                                <button className='btn newsletter__btn'>Subscribe</button>
                            </div>
                            <p>Subscribe for a world of travel wisdom! Join our community, receive exclusive tips, and embark on your next adventure fully equipped.
                                 Your journey begins with a simple click – subscribe today for the excitement of exploration at your fingertips!</p>
                        </div>

                    </Col>

                    <Col lg="6">
                        <div className="newsletter__img">
                            <img src={maleTourist} alt="" />
                        </div>
                    
                    </Col>

                </Row>

            </Container>
        </section>

    )
}

export default Newsletter