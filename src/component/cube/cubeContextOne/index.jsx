import React from 'react'
import style from './index.module.scss'
import Cube from 'component/cube/cubeTwo'
import Border from 'component/border/borderTwo'
import youla from 'assets/icon/youla.png'
export default function index() {
  return (
    <div className={style.cubecontainer}>
      <div className={style.textcontainer}>
        <Border />
        <div className={style.more}>
          <svg className={style.border}>
            <rect className={style.rectangle} />
          </svg>
          <div className={style.btn}>
            More
            <img src={youla} alt="" />
          </div>
        </div>
        <ul className={style.text}>
          <li className={style.date}>Mar 21, 2020</li>
          <li className={style.title}>怪物图鉴</li>
          <li className={style.contentOne}>
            白熊 -- 又名小米，移动速度快，是一种血量不高但危险性高的物种，它的跳跃让人类感到无比棘手...
          </li>
          <li className={style.contentTwo}>
            沙虫 -- 又名金龙鱼，移动速度极快，血量略高，危险性极高，能穿梭于任意地形，在直线速度上...
          </li>
        </ul>
      </div>
      <div className={style.cover}></div>
      <div className={style.cube}>
        <Cube type='monster'></Cube>
      </div>

    </div>
  )
}
