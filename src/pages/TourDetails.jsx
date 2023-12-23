import React from 'react'
import '../styles/tourDetails.css'
import tourData from '../assets/data/tours'
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import calculateAvgRating from '../utils/avgRating'

const TourDetails = () => {

  const { id } = useParams()
  console.log(id);

  const tour = tourData.find((tour) => (tour.id === id))

  const { photo, title, desc, price, reviews, city, distance, maxGroupSize } = tour

  const{totalRating,avgRating}=calculateAvgRating(reviews);



  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <div className="tour__content">
                <img src={photo} alt="" />

                <div className='tour__info'>
                  <h2>{title}</h2>

                  <div className='d-flex align-items-center gap-5'>

                    <span className='tour__rating d-flex align-items-center gap-1'>
                      <i class='ri-star-fill' style={{color:"var(--secondary-color)"}}></i>{avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? ('Not rated') : (<span>({reviews?.length})</span>)}

                    </span>
                    <span>
                      <i class='ri-map-pin-user-fill'></i> {city}
                    </span>

                  </div>

                  <div className="tour__extra-details">
                  <span> <i class='ri-map-pin-2-line'></i>{distance}km</span>
                    <span> <i class='ri-money-dollar-circle-line'></i>${price}/per person</span>
                    <span> <i class='ri-group-line'></i>{maxGroupSize}</span>
                  </div>
                  <h5 >Description</h5>
                  <p>{desc}</p>

                </div>
              </div>

            </Col>
          </Row>
        </Container>
      </section>


    </>
  )
}

export default TourDetails