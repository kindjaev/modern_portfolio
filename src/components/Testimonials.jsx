import React from 'react'
import "./testimonials.css"
import AVATAR1 from "../assets/avatar1.jpg"
 
// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function Testimonials() {
  const data = [
    {img: AVATAR1, name: "Siera", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iusto at quod sint perspiciatis delectus, omnis non quis odio, illum atque iure! Voluptatum ut provident dignissimos dicta dolorum dolores sit!"},
    {img: AVATAR1, name: "Siera", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iusto at quod sint perspiciatis delectus, omnis non quis odio, illum atque iure! Voluptatum ut provident dignissimos dicta dolorum dolores sit!"},
    {img: AVATAR1, name: "Siera", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iusto at quod sint perspiciatis delectus, omnis non quis odio, illum atque iure! Voluptatum ut provident dignissimos dicta dolorum dolores sit!"},
  ]
  return (
    <section id='comments'>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map((comment, index) => 
          <SwiperSlide className="comment" key={index}>
            <img src={comment.img} alt="" className='comment_img'/>
            <div>
              <h5>{comment.name}</h5>
              <small>{comment.text}</small>
            </div> 
          </SwiperSlide>
        )}
      </Swiper>
    </section>
  )
}

export default Testimonials