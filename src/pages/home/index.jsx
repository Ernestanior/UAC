import React from 'react';
import Navbar from 'component/navbar';
import style from './index.module.scss';
import Bear from 'component/bear'
import Star from 'component/star'
import CubeOne from 'component/cube/cubeContextOne'
import CubeTwo from 'component/cube/cubeContextTwo'
import CubeThree from 'component/cube/cubeContextThree'
import Contact from 'component/contact'
import Swiper from 'component/swiper'
import Icon from 'component/iconList'
export default function index() {
  return (
    <div className={style.bg}>
      <Navbar />
      <Star />
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
