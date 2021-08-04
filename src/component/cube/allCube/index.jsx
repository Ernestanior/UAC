import React from 'react'
import CubeOne from 'component/cube/cubeOne'
import Border from 'component/border/borderTwo'
import style from './index.module.scss'

export default function index() {
  return (
    <div className={style.cubecontainer}>
      <div className={style.cubelist}>
        <div className={style.cubetitle}>Monsters<Border></Border></div>
        <span className={style.cubebox}>
          <CubeOne type='monster'></CubeOne>
        </span>

      </div>
      <div className={style.cubelist}>
        <div className={style.cubetitle}>Characters<Border></Border></div>
        <span className={style.cubebox}>
          <CubeOne type='character'></CubeOne>
        </span>

      </div>
      <div className={style.cubelist}>
        <div className={style.cubetitle}>Skills<Border></Border></div>
        <span className={style.cubebox}>
          <CubeOne type='skill'></CubeOne>
        </span>
      </div>
      <div className={style.cubelist}>
        <div className={style.cubetitle}>Skins<Border></Border></div>
        <span className={style.cubebox}>
          <CubeOne type='skin1'></CubeOne>
        </span>
      </div>
    </div>
  )
}
