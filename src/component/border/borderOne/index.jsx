import React from 'react'
import style from './index.module.scss'
export default function index() {
  return (
    <div className={style.borderBox}>
      <span className={style.one}></span>
      <span className={style.two}></span>
      <span className={style.three}></span>
      <span className={style.four}></span>
    </div>
  )
}
