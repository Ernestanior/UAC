import React from 'react'
import style from './index.module.scss'
import monster9 from 'assets/uac/monsters/7.png'
import monster8 from 'assets/uac/monsters/15.png'
import monster7 from 'assets/uac/monsters/9.png'
import monster12 from 'assets/uac/monsters/10.png'
import monster11 from 'assets/uac/monsters/11.png'
import monster10 from 'assets/uac/monsters/12.png'

import character1 from 'assets/uac/characters/1.png'
import character2 from 'assets/uac/characters/2.png'
import character3 from 'assets/uac/characters/3.png'
import character4 from 'assets/uac/characters/4.png'
import character5 from 'assets/uac/characters/5.png'
import character6 from 'assets/uac/characters/6.png'

import skin1 from 'assets/uac/skin/9.png'
import skin2 from 'assets/uac/skin/11.png'
import skin3 from 'assets/uac/skin/3.png'
import skin4 from 'assets/uac/skin/17.png'
import skin5 from 'assets/uac/skin/18.png'
import skin6 from 'assets/uac/skin/13.png'
export default function index(props) {
  return (
    <div>
      <div className={style.wrap}>
        {
          props.type === 'monster' ?
            <div className={style.cube}>
              <div className={style.front}><img src={monster7} alt="" className={style.img1}></img></div>
              <div className={style.back}><img src={monster8} alt="" className={style.img2}></img></div>
              <div className={style.top}><img src={monster9} alt="" className={style.img3}></img></div>
              <div className={style.bottom}><img src={monster10} alt="" className={style.img4}></img></div>
              <div className={style.left}><img src={monster11} alt="" className={style.img5}></img></div>
              <div className={style.right}><img src={monster12} alt="" className={style.img6}></img></div>
            </div> : ''
        }
        {
          props.type === 'character' ?
            <div className={style.cube}>
              <div className={style.front}><img src={character1} alt="" className={style.img1}></img></div>
              <div className={style.back}><img src={character2} alt="" className={style.img2}></img></div>
              <div className={style.top}><img src={character3} alt="" className={style.img3}></img></div>
              <div className={style.bottom}><img src={character4} alt="" className={style.img4}></img></div>
              <div className={style.left}><img src={character5} alt="" className={style.img5}></img></div>
              <div className={style.right}><img src={character6} alt="" className={style.img6}></img></div>
            </div> : ''
        }
        {
          props.type === 'skin' ?
            <div className={style.cube}>
              <div className={style.front}><img src={skin1} alt="" className={style.img1}></img></div>
              <div className={style.back}><img src={skin2} alt="" className={style.img2}></img></div>
              <div className={style.top}><img src={skin3} alt="" className={style.img3}></img></div>
              <div className={style.bottom}><img src={skin4} alt="" className={style.img4}></img></div>
              <div className={style.left}><img src={skin5} alt="" className={style.img5}></img></div>
              <div className={style.right}><img src={skin6} alt="" className={style.img6}></img></div>
            </div> : ''
        }
      </div>
    </div>
  )
}
