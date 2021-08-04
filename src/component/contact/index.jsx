import React from 'react'
import style from './index.module.scss'
import worker1 from 'assets/group/1.jpg'
import worker2 from 'assets/group/2.jpg'
import worker3 from 'assets/group/3.jpg'
import worker4 from 'assets/group/4.jpg'
import worker5 from 'assets/group/5.jpg'
import worker6 from 'assets/group/6.jpg'
import worker7 from 'assets/group/7.jpg'
import worker8 from 'assets/group/8.jpg'
import worker9 from 'assets/group/9.jpg'
import worker10 from 'assets/group/10.jpg'
import worker11 from 'assets/group/11.jpg'
import worker12 from 'assets/group/12.jpg'
import worker13 from 'assets/group/13.jpg'
import worker14 from 'assets/group/14.jpg'
import worker15 from 'assets/group/15.jpg'
import worker16 from 'assets/group/16.jpg'
import worker17 from 'assets/group/17.jpg'
import worker18 from 'assets/group/18.jpg'
import Border from 'component/border/borderThree'
import Card from 'component/card'
import code from 'assets/group/code.png'
export default function index() {
  return (
    <div>
      <div className={style.cardBox}>
        <Border />
        <div className={style.code}>
          <img src={code} alt="" />
          <div>UAC攻略群</div>
          {/* <Border /> */}
        </div>
        <div className={style.workerBox}>
          <svg className={style.title}>
            <defs>
              <linearGradient id="carColor" gradientTransform="rotate(90)">
                <stop offset="0%" stopColor="#6bf582"></stop>
                <stop offset="100%" stopColor="#fec780"></stop>
              </linearGradient>
            </defs>
            <text y="90" className={style.text}>玩具车打工仔</text>
          </svg>
          <ul>
            <li className={style.workerlist}>
              <img src={worker3} alt="" className={style.worker} />
              <img src={worker1} alt="" className={style.worker} />
              <img src={worker2} alt="" className={style.worker} />
            </li>
            <li>
              <img src={worker4} alt="" className={style.worker} />
              <img src={worker5} alt="" className={style.worker} />
              <img src={worker6} alt="" className={style.worker} />
              <img src={worker7} alt="" className={style.worker} />
              <img src={worker8} alt="" className={style.worker} />
            </li>
            <li>
              <img src={worker9} alt="" className={style.worker} />
              <img src={worker10} alt="" className={style.worker} />
              <img src={worker11} alt="" className={style.worker} />
              <img src={worker12} alt="" className={style.worker} />
              <img src={worker13} alt="" className={style.worker} />
            </li>
            <li>
              <img src={worker14} alt="" className={style.worker} />
              <img src={worker15} alt="" className={style.worker} />
              <img src={worker16} alt="" className={style.worker} />
              <img src={worker17} alt="" className={style.worker} />
              <img src={worker18} alt="" className={style.worker} />
            </li>
          </ul>
        </div>
        <div className={style.dress}>
          <div className={style.dressOne}></div>
          <div className={style.dressTwo}></div>
          <div className={style.dressThree}></div>
          <div className={style.dressFour}></div>
        </div>
      </div>
      <div className={style.cardContainer}>
        <Card></Card>
      </div>

    </div >
  )
}
