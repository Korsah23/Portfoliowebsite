import "./testimonials.css";
import TestImg1 from "./TestImg1.jpg";
import TestImg2 from "./TestImg2.jpg";
import TestImg3 from "./TestImg3.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react"; //swiper-react"

// Import Swiper styles
import "swiper/css"; //
import "swiper/css/pagination" //pagination.min.css";

export default function Testimonials() {
  
  


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
         <SwiperSlide className="testimonial" >
              <div className="client__avatar">
                <img src={TestImg1} alt="" />
              </div>
              <h5 className="client__name">Lawrence Fesi</h5>
              <small className="client__review">
              Excellent Work There. Didn't expect such on time delivery and clean and fast website design. 
              I really love how he kept in touch with me all this while during the development of my website.
               I recommend lawrence to everyone.
              </small>
            </SwiperSlide>

            <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={TestImg2} alt="" />
              </div>
              <h5 className="client__name">Mandy Ellis</h5>
              <small className="client__review">
              My company wanted someone to complete a simple web app development in few days.
               I came across Solomon on Fiverr. 
               I decided to outsource the work to him. Despite his cheap rate, he did the work as needed and we were impressed. 
               Nice work there!
              </small>
            </SwiperSlide>

            <SwiperSlide className="testimonial" >
              <div className="client__avatar">
                <img src={TestImg3} alt="" />
              </div>
              <h5 className="client__name">Clay Benson</h5>
              <small className="client__review">
              I first didn't realize the project will come as neat and well designed as it did. 
              Solomon is a good developer who takes his time to get the job done.
               I'm really Impressed! .Sorry I couldn't add my Picture though, this stock picture will do.
              </small>
            </SwiperSlide>
      </Swiper>
    </section>
  );
}
