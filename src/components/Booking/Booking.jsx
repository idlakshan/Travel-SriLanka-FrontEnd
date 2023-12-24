import React, { useState } from 'react'
import './booking.css'
import { Button, Form, FormGroup, ListGroup, ListGroupItem } from 'reactstrap'
import { useNavigate } from 'react-router-dom';

const Booking = ({ tour, avgRating }) => {

    const { price, reviews } = tour;
    const navigate=useNavigate()

    const[credentials,setCredentials]=useState({
        userId:'01',
        userEmail:'expample@gmail.com',
        fullName:'',
        phone:'',
        gusestSize:1,
        bookAt:''
    })

    const handleChange=(e)=>{
           setCredentials((pre)=>({
            ...pre,[e.target.id]:e.target.value
           })
    )}

    const serviceFee=10
    const totalAmount=Number(price)*Number(credentials.gusestSize)+Number(serviceFee)

    const handleClick=(e)=>{
        e.preventDefault()
        navigate('/thank-you')
    }

  

    return (
        <div className='booking'>
            <div className='booking__top d-flex align-items-center justify-content-between'>
                <h3>${price}  <span>/per person</span> </h3>
                <span className='tour__rating d-flex align-items-center'>
                    <i class='ri-star-fill' ></i>{avgRating === 0 ? null : avgRating} ({reviews?.length})
                  
                </span>
            </div>

            <div className="booking__form">
                <h5>Information</h5>
                <Form className='booking__info-form' onSubmit={handleClick}>
                    <FormGroup>
                        <input type="text" name="" id="fullName" placeholder='Full Name' required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <input type="number" name="" id="phone" placeholder='Phone ' required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup className=' d-flex align-items-center gap-3'>
                        <input type="date" name="" id="bookAt" placeholder='' required onChange={handleChange} />
                        <input type="number" name="" id="gusestSize" placeholder='Guest' required onChange={handleChange} />
                    </FormGroup>

                </Form>
            </div>

            <div className="booking__bottom">
                <ListGroup>
                    <ListGroupItem className='border-0 px-0'>
                              <h5 className=' d-flex align-items-center gap-1'>${price} <i class='ri-close-line'></i>1 person</h5>
                              <span>${price}</span>
                    </ListGroupItem>
                    <ListGroupItem className='border-0 px-0'>
                              <h5>Service Charge</h5>
                              <span>${serviceFee}</span>
                    </ListGroupItem>
                    <ListGroupItem className='border-0 px-0 total'>
                              <h5>Total</h5>
                              <span>${totalAmount}</span>
                    </ListGroupItem>
                </ListGroup>

                <Button className='btn primary__btn w-100 mt-4 'onClick={handleClick}>Book Now</Button>
            </div>

        </div>
    )
}

export default Booking
