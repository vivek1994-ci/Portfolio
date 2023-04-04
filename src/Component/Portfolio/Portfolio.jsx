import React from 'react'
import './Portfolio.css'
import 'swiper/css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import Musicapp from "../../img/musicapp.png";


const Portfolio = () => {
  return (
    <div className="portfolio">
        {/* heading*/}
        <span>Recent Projects</span>
        <span>Portfolio</span>
        {/*Slider*/}
        <Swiper 
        spaceBetween={30}
        slidesPerView={3.9}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <img src={Sidebar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerce} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={HOC} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Musicapp} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio