import React from 'react';

import style from './index.module.scss';
import Bear from 'pages/home/bear'
// import Star from 'component/star'
import CubeOne from 'component/cube/cubeContextOne'
import CubeTwo from 'component/cube/cubeContextTwo'
import CubeThree from 'component/cube/cubeContextThree'
import Contact from 'pages/home/contact'
import Swiper from 'pages/home/swiper'
import Icon from 'pages/home/iconList'
export default function index() {
  return (
    <div className={style.bg}>
      {/* <Star /> */}
      <Bear></Bear>
      <Swiper></Swiper>
      <CubeOne></CubeOne>
      <CubeTwo></CubeTwo>
      <CubeThree></CubeThree>
      <Contact></Contact>
      <Icon></Icon>
    </div>
  )
}
