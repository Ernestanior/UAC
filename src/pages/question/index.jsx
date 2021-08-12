import React from 'react'
import style from './index.module.scss'
import Saturn from 'component/Saturn'
// import Star from 'component/star'
export default function index() {
  document.documentElement.scrollTop = document.body.scrollTop = 0;
  return (
    <div className={style.bg}>
      {/* <Star></Star> */}
      <div className={style.Saturn}>
        <Saturn></Saturn>
      </div>

      <div className={style.bgc}>
        <div className={style.title}>常见问题</div>
        <ul className={`${style.content} ${style.three}`}>
          <li> 1. 怎样才能上大佬的车队？车票是什么？怎么完成？</li>
          <li>要上车首先得有车票，其次要熟悉大概的模式流程和自身职位的任务。</li>
          <li>抱着认真的心态进行游戏，禁止摸鱼，车队里的每一个职业都很重要，每个职业都能玩出很高的上限，不存在有什么挂机职业的说法</li>
          <li>车票：完成岛风的录像分享计划</li>
          <li>通过上传你之前的录像来确认你的日常表现，好判断你有没有资格上车，如果有多次TK，死退等恶性行为，将不被允许上车</li>
          <li>完成车票方法：</li>
          <li>方式为：下载群文件 DreamProtocolDataSharingPlan.exe</li>
          <li>第一次以管理员打开 会开始下载必须的扩充组件，下载完成后该程序会自动上传录像，即视为完成车票，如你的系统不是win8/win10，请下载net4.8来使用该程序
            该程序同样为UAC/UA3云存档，访问其他公告以找到云存档各功能的具体使用方式</li>
          <li style={{ color: 'rgb(255, 94, 0)' }}>如果觉得以上方法较为复杂，有一种比较简单的方式：发自己女装到群里</li>
        </ul>
        <ul className={`${style.content} ${style.three}`}>
          <li>2.第二天赋的解锁方法</li>
          <li>方法一：全员禁用第二天赋，并以100%任务完成度通关噩梦T1HY难度</li>
          <li>每次只解锁对应职业的第二天赋，比如你用SDM通关噩梦T1HY，那么只会解锁SDM的第二天赋</li>
          <li>方法二：向官群群主提供有偿赞助</li>
        </ul>
        <ul className={`${style.content} ${style.three}`}>
          <li>3.第三天赋的解锁方法</li>
          <li>方法一：前线禁用AS天赋通关EXAM模式生存T1(Maybe)</li>
          <li>方法二：向官群群主提供有偿赞助</li>
        </ul>
        <ul className={`${style.content} ${style.three}`}>
          <li>4.AR机枪手的加点方式</li>
          <li>HC天赋加点：1级火弹，1级压制，满射击，再点2级压制，补1级弹药链，满士兵，满弹药链，满火弹</li>
          <li>HT天赋加点：1级压制，满射击，再点1级压制，补1级弹药链，满压制，满士兵，满火弹</li>
        </ul>
        <ul className={`${style.content} ${style.three}`}>
          <li>5.其他职业加点方式:</li>
          <li>看攻略，在不一样的模式中不同职业有着不同的加点</li>
          <li>野房的最高效率加点参考游乐场攻略或者PH攻略，噩梦和其他模式的加点有区别</li>
        </ul>
        <ul className={`${style.content} ${style.three}`}>
          <li>6.PHANTASY模式的开启方式</li>
          <li>整局游戏中大于3/4的人数开启云存档</li>
          <li>例如整局有12人，那么只有大于9人，也就是至少10人开启云存档才能开启PHANTASY模式</li>
        </ul>
        <ul className={`${style.content} ${style.three}`}>
          <li>7.云存档是什么？怎么下载？</li>
          <li>云存档为UAC游戏的高级工具，全程为DreamProtocolDataSharingPlan.exe</li>
          <li>里面有诸多辅助功能，比如上传录像，恢复存档，防震，拉高视野等，也能查询目标玩家的历史信息</li>
        </ul>
        <ul className={`${style.content} ${style.three}`}>
          <li>8.职业，通用天赋，军服的获取方式</li>
          <li>进游戏，打开F12，你要的信息都在里面</li>
        </ul>
        <ul className={`${style.content} ${style.three}`}>
          <li>9.群里大佬们那些blingbling的衣服怎么来的？</li>
          <li>方式一：基础流光可以通过通关噩梦或者PMC剧情获得</li>
          <li>方式二：氪</li>
        </ul>
        <ul className={`${style.content} ${style.three}`}>
          <li>10.如何恢复快捷键？</li>
          <li>Step 1: 找到自己的文件夹，就是通过快捷方式到达的那个文件夹，然后返回上一层目录，如果找的文件夹正确，那个上一层目录应该是个纯数字目录。</li>
          <li>Step 2: 那个目录里有个Hotkeys文件夹，进去之后删除0_Default文件。</li>
          <li>Step 3: 进入游戏，点选项，之后进入快捷键，把方案切换到顺序，（有可能问你是否要另外保存，按否），然后切换回默认排列，之后点右下角的确定，第一个点是，第二个点否。</li>
        </ul>
        <ul className={`${style.content} ${style.three}`}>
          <li>11.UAC部分常用代码？</li>
          <li>-as: 幽灵自动切换属性弹</li>
          <li>-list: 玩家序号显示，云存档是否开启显示</li>
          <li>-give #: 小弟移交(#为玩家序号)</li>
          <li>-pathing: 路径显示</li>
          <li>-hyperpulse：开启HY难度刷怪器</li>
          <li>-extreme：开启EX难度刷怪器(开启HY之后才能开启EX)</li>
          <li>-easy: 开启简单模式</li>
        </ul>
        <ul className={`${style.content} ${style.three}`}>
          <li>12.前线代码脚本怎么打？</li>
          <li>打开云存档，点其他，启用前线脚本</li>
        </ul>
      </div>
    </div>
  )
}
