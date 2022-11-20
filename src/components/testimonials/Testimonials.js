import "./testimonials.css";
import React, {useState,useEffect} from "react";
import axios from "axios"

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react"; //swiper-react"

// Import Swiper styles
import "swiper/css"; //
import "swiper/css/pagination" //pagination.min.css";

export default function Testimonials() {
  //set the state for getting testimonials 
 const [testimony,setTestimony] = useState([]);
 const count = 0;
 //make API request with axios
 useEffect(() => {
  axios.get("http://127.0.0.1:8000/testimonials/").then((res)=>{
    console.log(res.data)
    setTestimony(res.data)
  }
  
  )
 }
 
 ,[])
  


  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2> Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {
          testimony.map((singleData) =>{
            
            return(
              <SwiperSlide className="testimonial" key = {singleData.name}>
              <div className="client__avatar">
                <img src={singleData.image} alt="" />
              </div>
              <h5 className="client__name">{singleData.name}</h5>
              <small className="client__review">
                {singleData.message}
              </small>
            </SwiperSlide>

            )
            
            
          } ) 
       
}
      </Swiper>
    </section>
  );
}
