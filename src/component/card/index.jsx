import React from 'react'
import style from './index.module.scss'
export default function index() {
  return (
    <div className={style.levels}>
      <div className={`${style.level} ${style.one}`}>
        <div className={style.title}>One</div>
        <div className={style.content}>不同职业，不同体验</div>
      </div>
      <div className={`${style.level} ${style.two}`}>
        <div className={style.title}>Two</div>
        <div className={style.content}>团队合作，配合默契</div>
      </div>
      <div className={`${style.level} ${style.three}`}>
        <div className={style.title}>Three</div>
        <div className={style.content}>丰富剧情，享受乐趣</div>
      </div>
      <div className={`${style.level} ${style.four}`}>
        <div className={style.title}>Four</div>
        <div className={style.content}>卡比演比，无与伦比</div>
      </div>
    </div>
  )
}
