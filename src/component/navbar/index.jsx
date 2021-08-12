import React from 'react'
import style from './index.module.scss'
import Border from 'component/border/borderOne'
import { Link } from 'react-router-dom'
import uac from 'assets/uac.jpg'
export default function index() {
  return (
    <div className={style.navbg}>
      <span className={style.navtitle}><img src={uac} alt='' />UAC</span>
      <ul className={style.navbox}>
        <li><Link style={{ color: 'white' }} to='/'>主页<Border /></Link></li>
        <li><Link style={{ color: 'white' }} to='/about'>关于本站<Border /></Link> </li>
        <li><Link style={{ color: 'white' }} to={{ pathname: '/gba/pg', state: '游乐场' }}>攻略<Border /></Link></li>
        <li><Link style={{ color: 'white' }} to='/handbook'>图鉴<Border /></Link></li>
        <li><Link style={{ color: 'white' }} to='/FAQ'>常见问题<Border /></Link></li>
      </ul>
    </div>
  )
}
