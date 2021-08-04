import React from 'react'
import icon1 from 'assets/icon/wechat.png'
import icon2 from 'assets/icon/QQ.png'
import icon3 from 'assets/icon/weibo.png'
import icon4 from 'assets/icon/twitter.png'
import icon5 from 'assets/icon/tiktok.png'
import icon6 from 'assets/icon/facebook.png'
import icon7 from 'assets/icon/youtube.png'
import code2 from 'assets/group/code2.png'
import code3 from 'assets/group/code3.png'
import code4 from 'assets/group/code4.png'
import style from './index.module.scss'
export default function index() {
  return (
    <div className={style.iconContainer}>

      <ul className={style.iconList}>
        <li className={style.wechat}>
          <img src={icon1} alt="" />
          <div className={style.code}>
            <img src={code2} alt="" />
          </div>
        </li>
        <li className={style.QQ}>
          <img src={icon2} alt="" />
          <div className={style.code}>
            <img src={code3} alt="" />
          </div>
        </li>
        <li className={style.weibo}>
          <img src={icon3} alt="" />
          <div className={style.code}>
            <img src={code4} alt="" />
          </div>
        </li>
        <li className={style.twitter}><img src={icon4} alt="" /></li>
        <li className={style.tiktok}><img src={icon5} alt="" /></li>
        <li className={style.facebook}><img src={icon6} alt="" /></li>
        <li className={style.youtube}><img src={icon7} alt="" /></li>
      </ul>
    </div>

  )
}
