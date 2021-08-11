import React from 'react'
import style from './index.module.scss';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "./style.css";

import gif1 from 'assets/gifs/1.gif'
import gif2 from 'assets/gifs/2.gif'
import gif3 from 'assets/gifs/3.gif'
import gif4 from 'assets/gifs/4.gif'
import gif5 from 'assets/gifs/5.gif'
import gif6 from 'assets/gifs/6.gif'
import gif7 from 'assets/gifs/7.gif'
import gif8 from 'assets/gifs/8.gif'
import gif9 from 'assets/gifs/9.gif'
import SwiperCore, {
  Pagination, Navigation
} from 'swiper/core';
SwiperCore.use([Pagination, Navigation]);

export default function index() {
  return (
    <div className={style.swiperbox}>
      <div className={style.swiper}>
        <Swiper slidesPerView={1} spaceBetween={30} loop={true} pagination={{
          "clickable": true
        }} navigation={true} >
          <SwiperSlide ><img src={gif1} alt="" /></SwiperSlide>
          <SwiperSlide ><img src={gif2} alt="" /></SwiperSlide>
          <SwiperSlide ><img src={gif3} alt="" /></SwiperSlide>
          <SwiperSlide ><img src={gif4} alt="" /></SwiperSlide>
          <SwiperSlide ><img src={gif5} alt="" /></SwiperSlide>
          <SwiperSlide ><img src={gif6} alt="" /></SwiperSlide>
          <SwiperSlide ><img src={gif7} alt="" /></SwiperSlide>
          <SwiperSlide ><img src={gif8} alt="" /></SwiperSlide>
          <SwiperSlide ><img src={gif9} alt="" /></SwiperSlide>
        </Swiper>
      </div>

      <svg className={style.swiperText}>
        <defs>
          <linearGradient id="geekColor" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#fff"></stop>
            <stop offset="10%" stopColor="#fff"></stop>
            <stop offset="100%" stopColor="#777"></stop>
          </linearGradient>
        </defs>
        <text x='10' y='100'>精</text>
        <text x='10' y='200'>彩</text>
        <text x='10' y='300'>集</text>
        <text x='10' y='400'>锦</text>
      </svg>
    </div>
  )
}
