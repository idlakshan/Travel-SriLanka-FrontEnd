import React from 'react'

import carImg from '../assets/images/car.png'
import chatImg from '../assets/images/chat.png'
import moneyImg from '../assets/images/money.png'
import { Col } from 'reactstrap'
import ServiceCard from './ServiceCard'

const servicesData=[
    {
        imgUrl:carImg,
        title:"Our Vehicles",
        desc:"All vehicles are certified as well as meticulously cleaned and sanitized every day."
    },
    {
        imgUrl:chatImg,
        title:"Best tour Guide",
        desc:"We offer you your own dedicated group chat where our team is available 24/7 to help you with your questions, problems or if you just want to say hello."
    },
    {
        imgUrl:moneyImg,
        title:"Exploring the ForeverVacation Experience",
        desc:"We offer you a promise that if you don't fully enjoy your experience with ForeverVacation, we will give you your money back. We are that confident in our team and the experience we provide."
    }
]


const ServicesList = () => {
  return (
    <>
    {
      servicesData.map((item,index)=>(
      <Col lg='3' key={index}>
          <ServiceCard item={item}/>
      </Col>)
    )}
    </>
  )
}

export default ServicesList
