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
        <span className={style.date}>Feb 08, 2021</span>
        <span className={style.title}>游乐场攻略</span>
        <span className={style.contentOne}>
          士兵军衔(EN): 步兵, 重装机枪手, 机枪手, 激光, 神射手
        </span>

        <span className={style.contentTwo}>
          准尉军衔(WO): 双医生, 火娃, 战地工程师, 轨道, Cyber
        </span>
        <span className={style.contentThree}>军官军衔(CO): 火力支援专家, 排长, 幽魂
        </span>
      </div>
      <Cube type="character"></Cube>
    </div>
  )
}
