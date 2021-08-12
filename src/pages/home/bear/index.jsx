import React from 'react'
import style from './index.module.scss';
import Swiper from 'pages/home/swiper'

export default function index() {
  return (
    <div className={style.one}>

      <div className={style.con}>
        <div className={style.bearBox}>
          <div className={style.secondBox}>
            <div className={style.moom}></div>
            <svg className={style.text}>
              <defs>
                <linearGradient id="geekColor" gradientTransform="rotate(90)">
                  <stop offset="0%" stopColor="#fff"></stop>
                  <stop offset="10%" stopColor="#fff"></stop>
                  <stop offset="100%" stopColor="#777"></stop>
                </linearGradient>
              </defs>
              <text y="100">不死突袭编年史</text>
              <text x="120" y="160">UAC攻略论坛</text>
            </svg>
            <div className={style.bg1}>
              <div className={style.bg2}>
                <div className={style.bear}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.swipercon}>
          <Swiper></Swiper>
        </div>
      </div>
    </div>


  )
}
