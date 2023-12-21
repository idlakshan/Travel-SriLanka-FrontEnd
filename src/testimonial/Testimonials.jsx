import React from 'react'
import Slider from 'react-slick'
import ava01 from '../assets/images/ava-01.jpeg'
import ava02 from '../assets/images/ava-04.jpg'
import ava03 from '../assets/images/ava-03.jpeg'
import ava04 from '../assets/images/ava4.jpeg'

const Testimonials = () => {
    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                    slideToScroll:1,
                    infinite:true,
                    dots:true,
                },
            },
            {
                breakpoint:576,
                settings:{
                    slidesToShow:1,
                    slideToScroll:1,
                },
            },
        ]
    }
  return (
   <Slider {...settings}>
    <div className='testimonial py-4 px-3'>
        <p>Epic landscapes, cultural treasures, and unforgettable moments – that's what this tour company delivers. Each trip is a canvas painted with discovery, shared laughter, and the joy of exploration. Ready to embark on a journey where every step is a celebration of the extraordinary?</p>

            <div className='d-flex align-items-center gap-4 mt-3'>
                   <img src={ava01} alt="" className='w-25 h-25 rounded-2' />  
                   <div>
                     <h6 className='mb-0 mt-3'>Jhon Hayden</h6>
                     <p>Customer</p>
                   </div>
            </div>

    </div>

    <div className='testimonial py-4 px-3'>
        <p>What sets this tour company apart is their commitment to authenticity. It's not just about visiting places; it's about experiencing them. The local insights, 
            hidden gems, and genuine connections with fellow travelers create a tapestry of memories that colors my life with joy</p>

            <div className='d-flex align-items-center gap-4 mt-3'>
                   <img src={ava02} alt="" className='w-25 h-25 rounded-2' />  
                   <div>
                     <h6 className='mb-0 mt-3'>Shakila Prety</h6>
                     <p>Customer</p>
                   </div>
            </div>

    </div>



    <div className='testimonial py-4 px-3'>
        <p>I've been on multiple tours with this company, and each one has been a masterpiece of adventure. Whether it's exploring ancient ruins, savoring local cuisines,
             or simply sharing laughter around a campfire, these experiences are the threads that weave the fabric of my most cherished stories.</p>

            <div className='d-flex align-items-center gap-4 mt-3'>
                   <img src={ava03} alt="" className='w-25 h-25 rounded-2' />  
                   <div>
                     <h6 className='mb-0 mt-3'>Sam Curren</h6>
                     <p>Customer</p>
                   </div>
            </div>

    </div>

    <div className='testimonial py-4 px-3'>
        <p>Traveling with this tour company is not just a vacation; it's an investment in the richness of life. The attention to detail, the camaraderie among fellow explorers, 
            and the expertly crafted itineraries make every tour an opportunity to embrace the extraordinary. Unforgettable experiences with every tour!</p>

            <div className='d-flex align-items-center gap-4 mt-3'>
                   <img src={ava04} alt="" className='w-25 h-25 rounded-2' />  
                   <div>
                     <h6 className='mb-0 mt-3'>Kajol Devgan</h6>
                     <p>Customer</p>
                   </div>
            </div>

    </div>
   </Slider>
  )
}

export default Testimonials
