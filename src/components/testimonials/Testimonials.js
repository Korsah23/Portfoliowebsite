import "./testimonials.css";
import Avat1 from "./avatar1.jpg";
import Avat2 from "./avatar2.jpg";
import Avat3 from "./avatar3.jpg";
import Avat4 from "./avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";

export default function Testimonials() {
  return (
    <section>
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
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Avat1} alt="" />
          </div>
          <h5 className="client__name">Ernest Hemingway</h5>
          <small className="client__review">
            Very excellent work. id love it and would come back for more.{" "}
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Avat2} alt="" />
          </div>
          <h5 className="client__name">Ernest Hemingway</h5>

          <small className="client__review">
            Very excellent work. id love it and would come back for more.{" "}
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Avat3} alt="" />
          </div>
          <h5 className="client__name">Ernest Hemingway</h5>

          <small className="client__review">
            Very excellent work. id love it and would come back for more.{" "}
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Avat4} alt="" />
          </div>
          <h5 className="client__name">Ernest Hemingway</h5>

          <small className="client__review">
            Very excellent work. id love it and would come back for more.{" "}
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
