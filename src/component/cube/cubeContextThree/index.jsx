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
        <span className={style.date}>Mar 21, 2020</span>
        <span className={style.title}>有问必答</span>
        <span className={style.contentOne}>
          AR的最高输出技能怎么加点？
        </span>
        <span className={style.contentTwo}>
          天赋点HC，先1级火弹，先满4射击，再点3压制，补1级弹药链，把压制点满....
        </span>
      </div>
      <div className={style.cover}></div>
      <Cube type='skin'></Cube>
    </div>
  )
}
