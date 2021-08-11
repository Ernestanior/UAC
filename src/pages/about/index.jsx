import React from 'react'
import style from './index.module.scss'
import Hole from 'pages/about/blackHole'
// import Star from 'component/star'
import HP from 'assets/uac/skills/second/HP.png'
import IC from 'assets/uac/skills/second/IC.png'
import TR from 'assets/uac/skills/second/TR.png'
import RS from 'assets/uac/skills/second/RS.png'
import MR from 'assets/uac/skills/second/MR.png'
import CS from 'assets/uac/skills/second/CS.png'
import TD from 'assets/uac/skills/second/TD.png'
import EF from 'assets/uac/skills/second/EF.png'
import PL from 'assets/uac/skills/second/PL.png'
export default function index() {
  return (
    <div className={style.bg}>
      {/* <Star></Star> */}
      <div className={style.hole}>
        <Hole></Hole>
      </div>

      <div className={style.bgc}>
        <ul className={`${style.content} ${style.one}`}>
          <li>关于UAC</li>
          <li>不死突袭编年史（UAC）是一款基于星际争霸2自定义模式玩家创作的一款类RTS合作生存游戏，玩家将扮演12团队中的一员进入已被感染的萨利姆战区执行各项任务，游戏职业多样，步枪兵，医护兵，喷火兵等1X种技能不同的职业，在这里，单人的能力始终是有限，只有团队合作才能走向胜利。</li>
          <li>-- 鹿鹿</li>
        </ul>
        <ul className={`${style.content} ${style.two}`}>
          <li>最近更新</li>
          <li>版本V1.1378 第二天赋更新</li>
        </ul>
        <ul className={`${style.content} ${style.three}`}>
          <li> 1. 轨道 [HP - 高优先级]:</li>
          <li>轨道卫星侦察将会持续为团队提供目标区域视野，直到下一次使用该技能。</li>
          <li><img style={{ 'width': '100%' }} src={HP} alt="" /></li>
        </ul>
        <ul className={`${style.content} ${style.three}`}>
          <li>2.步枪兵 [TR - 条件反射]:</li>
          <li>如果在1~15发子弹内重新装填弹夹, 重新装填会立即完成，增加30%伤害，免疫卡壳，持续5秒，额外增加10发子弹，并整合之前剩下的子弹。</li>
          <li><img style={{ 'width': '100%' }} src={TR} alt="" /></li>
        </ul>
        <ul className={`${style.content} ${style.three}`}>
          <li>3.赛博格 [MR - 强化矩阵]:</li>
          <li>城墙协议提供每秒5点HP恢复，移动速度仅降低30%。</li>
          <li><img style={{ 'width': '100%' }} src={MR} alt="" /></li>
        </ul>
        <ul className={`${style.content} ${style.three}`}>
          <li>4.神射手 [CS - 致残打击]:</li>
          <li>武器攻速降低30%，暴击率增加5%，射程增加6点，攻击时有66%几率触发一种效果：</li>
          <li>1). 伤害增加2000点</li>
          <li>2). 怪物攻速和移速减少30% [2秒]</li>
          <li>3). 每秒损失3%最大生命值 [2秒]</li>
          <li>4). 进入易伤状态，受到所有伤害增加15% [2秒]</li>
          <li><img style={{ 'width': '100%' }} src={CS} alt="" /></li>
        </ul>
        <ul className={`${style.content} ${style.three}`}>
          <li>5.幽魂 [TD - 黄蜂战术无人机]:</li>
          <li>无人机拥有超级隐形（无法被攻击），自带轻型激光武器（可移动攻击），周期性自动进行激光标记。</li>
          <li><img style={{ 'width': '100%' }} src={TD} alt="" /></li>
        </ul>
        <ul className={`${style.content} ${style.three}`}>
          <li>6.排长 [RS -  快速支援]:</li>
          <li>通过输入-RS # 指令空投代码指向的支援兵种类空降到排长周围，无法超过目前可招募支援兵最大数。</li>
          <li><img style={{ 'width': '100%' }} src={RS} alt="" /></li>
        </ul>
        <ul className={`${style.content} ${style.three}`}>
          <li>7.火娃 [EF -  永恒之火]:</li>
          <li>凝固汽油持续时间从3秒延长至10秒，燃油喷射额外叠加4/6/8/10当前等级的凝固汽油</li>
          <li><img style={{ 'width': '100%' }} src={EF} alt="" /></li>
        </ul>
        <ul className={`${style.content} ${style.three}`}>
          <li>8.幽灵 [IC -  离子催化]:</li>
          <li>等离子手雷的爆炸和燃烧伤害增加50%，减速效果30%，离子炮持续时间提升2秒</li>
          <li><img style={{ 'width': '100%' }} src={IC} alt="" /></li>
        </ul>
        <ul className={`${style.content} ${style.three}`}>
          <li>9.激光震爆兵 [PL -  棱镜激光]:</li>
          <li>激光会在攻击目标之后弹射3次，造成100%伤害，第一次弹射会应用灼烧技能，10秒钟最多15次攻击会触发弹射</li>
          <li><img style={{ 'width': '100%' }} src={PL} alt="" /></li>
        </ul>
      </div>
    </div>
  )
}
