import React from 'react'
import style from './index.module.scss'
import Border from 'component/border/borderOne'
import uac from 'assets/uac.jpg'
export default function index() {
  return (
    <div className={style.navbg}>
      <img src={uac} alt='' />
      <span className={style.navtitle}>UAC</span>
      <ul className={style.navbox}>
        <li>主页<Border /></li>
        <li>关于本站<Border /></li>
        <li>攻略<Border /></li>
        <li>常见问题<Border /></li>
        <li>杂谈<Border /></li>
      </ul>
    </div>
  )
}
