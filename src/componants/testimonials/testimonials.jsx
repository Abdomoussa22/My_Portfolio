import React from 'react'
import './testimonials.css'
import IMAG1 from '../../assets/avatar1.jpg'
import IMAG2 from '../../assets/avatar2.jpg'
import IMAG3 from '../../assets/avatar3.jpg'
import IMAG4 from '../../assets/avatar4.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";
const data = [
  {
    image : IMAG1 , 
    name : "Sara Yasser" , 
    review : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique provident laudantium dolorum nesciunt repellendus tempore deleniti, dolorem corporis mollitia enim!"
  },
  {
    image : IMAG2 , 
    name : "Ahmed Essam" , 
    review : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique provident laudantium dolorum nesciunt repellendus tempore deleniti, dolorem corporis mollitia enim!"
  },
  {
    image : IMAG3 , 
    name : "Mahmoud Ibrahim" , 
    review : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique provident laudantium dolorum nesciunt repellendus tempore deleniti, dolorem corporis mollitia enim!"
  },
  {
    image : IMAG4 , 
    name : "Essra Same" , 
    review : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique provident laudantium dolorum nesciunt repellendus tempore deleniti, dolorem corporis mollitia enim!"
  },
]
const Testimonials = () => {
  return (
   <>
   <section id='testimonials'>
    <h5>Review From Clients</h5>
    <h2>Testimonials</h2>
    <Swiper
    className="container testimonials-container"
     modules={[Pagination]} 
     slidesPerView = {1}
     spaceBetween = {40}
     pagination={{clickable : true}}
     >
     {
      data.map(({image , name , review}, index) =>
      <SwiperSlide key={index} className="testimonial">
      <div className="client-image">
        <img src={image} alt={name} />
      </div>
      <h5 className='client-name'>{name}</h5>
      <small>{review}</small>
    </SwiperSlide>
      )
     }
    </Swiper>
   </section>
   </>
  )
}

export default Testimonials
