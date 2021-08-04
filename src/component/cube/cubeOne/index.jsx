import React from 'react'
import style from './index.module.scss'
import skill1 from 'assets/uac/skills/1.png'
import skill2 from 'assets/uac/skills/2.png'
import skill3 from 'assets/uac/skills/3.png'
import skill4 from 'assets/uac/skills/4.png'
import skill5 from 'assets/uac/skills/5.png'
import skill6 from 'assets/uac/skills/6.png'

import monster1 from 'assets/uac/monsters/1.png'
import monster2 from 'assets/uac/monsters/2.png'
import monster3 from 'assets/uac/monsters/3.png'
import monster4 from 'assets/uac/monsters/4.png'
import monster5 from 'assets/uac/monsters/5.png'
import monster6 from 'assets/uac/monsters/6.png'

import character1 from 'assets/uac/characters/1.png'
import character2 from 'assets/uac/characters/2.png'
import character3 from 'assets/uac/characters/3.png'
import character4 from 'assets/uac/characters/4.png'
import character5 from 'assets/uac/characters/5.png'
import character6 from 'assets/uac/characters/6.png'

import skin1 from 'assets/uac/skin/1.png'
import skin2 from 'assets/uac/skin/2.png'
import skin3 from 'assets/uac/skin/3.png'
import skin4 from 'assets/uac/skin/4.png'
import skin5 from 'assets/uac/skin/5.png'
import skin6 from 'assets/uac/skin/6.png'

import skin7 from 'assets/uac/skin/7.png'
import skin8 from 'assets/uac/skin/8.png'
import skin9 from 'assets/uac/skin/9.png'
import skin10 from 'assets/uac/skin/10.png'
import skin11 from 'assets/uac/skin/11.png'
import skin12 from 'assets/uac/skin/12.png'
export default function Index(props) {
  return (
    <div className={style.cube}>
      {props.type === 'skill' ?
        <div>
          <img src={skill1} alt="" className={style.img1}></img>
          <img src={skill2} alt="" className={style.img2}></img>
          <img src={skill3} alt="" className={style.img3}></img>
          <img src={skill4} alt="" className={style.img4}></img>
          <img src={skill5} alt="" className={style.img5}></img>
          <img src={skill6} alt="" className={style.img6}></img>
        </div>
        : ''
      }
      {props.type === 'monster' ?
        <div>
          <img src={monster1} alt="" className={style.img1}></img>
          <img src={monster2} alt="" className={style.img2}></img>
          <img src={monster3} alt="" className={style.img3}></img>
          <img src={monster4} alt="" className={style.img4}></img>
          <img src={monster5} alt="" className={style.img5}></img>
          <img src={monster6} alt="" className={style.img6}></img>
        </div>
        : ''
      }
      {props.type === 'character' ?
        <div>
          <img src={character1} alt="" className={style.img1}></img>
          <img src={character2} alt="" className={style.img2}></img>
          <img src={character3} alt="" className={style.img3}></img>
          <img src={character4} alt="" className={style.img4}></img>
          <img src={character5} alt="" className={style.img5}></img>
          <img src={character6} alt="" className={style.img6}></img>
        </div>
        : ''
      }
      {props.type === 'skin1' ?
        <div>
          <img src={skin1} alt="" className={style.img1}></img>
          <img src={skin2} alt="" className={style.img2}></img>
          <img src={skin3} alt="" className={style.img3}></img>
          <img src={skin4} alt="" className={style.img4}></img>
          <img src={skin5} alt="" className={style.img5}></img>
          <img src={skin6} alt="" className={style.img6}></img>
        </div>
        : ''
      }
      {props.type === 'skin2' ?
        <div>
          <img src={skin7} alt="" className={style.img1}></img>
          <img src={skin8} alt="" className={style.img2}></img>
          <img src={skin9} alt="" className={style.img3}></img>
          <img src={skin10} alt="" className={style.img4}></img>
          <img src={skin11} alt="" className={style.img5}></img>
          <img src={skin12} alt="" className={style.img6}></img>
        </div>
        : ''
      }
    </div>
  )
}
