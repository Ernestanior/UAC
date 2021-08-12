import React from 'react'
import style from './index.module.scss'
import Cube from 'component/cube/cubeTwo'
import Border from 'component/border/borderTwo'
import youla from 'assets/icon/youla.png'
import { withRouter } from 'react-router-dom'
export default withRouter(Index)
function Index(props) {
  const handlePG = (e) => {
    props.history.replace('/gba/pg', '游乐场')
  }
  return (
    <div className={style.cubecontainer}>
      <div className={style.textcontainer}>
        <Border />
        <div className={style.more} onClick={handlePG}>
          <svg className={style.border}>
            <rect className={style.rectangle} />
          </svg>
          <div className={style.btn}>
            More
            <img src={youla} alt="" />
          </div>
        </div>
        <ul className={style.text}>
          <li className={style.date}>Feb 08, 2021</li>
          <li className={style.title}>游乐场攻略</li>
          <li className={style.contentOne}>士兵军衔(EN): 步兵, 重装机枪手, 机枪手, 激光, 神射手</li>
          <li className={style.contentTwo}>准尉军衔(WO): 双医生, 火娃, 战地工程师, 轨道, Cyber</li>
          <li className={style.contentThree}>军官军衔(CO): 火力支援专家, 排长, 幽魂
          </li>
        </ul>
      </div>
      <div className={style.cube}>
        <Cube type='character'></Cube>
      </div>
    </div>
  )
}
