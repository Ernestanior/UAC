import React from 'react'
import style from './index.module.scss'
export default function index() {
  return (
    <div>
      <svg className={style.text}>
        <text x="100" y="100" className={style.logo}>找到工作</text>
      </svg>
    </div>
  )
}
